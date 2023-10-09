import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors'
import sqlite3  from 'sqlite3';

console.log('Starting the server...')

interface CreateUserRequestBody {
    id:number;
    name: string;
    password: string;
}

const app = express();

app.use(cors({
    origin: 'https://davids-car-rental.netlify.app',
}));

app.use(express.json())

const db = new sqlite3.Database('users.db');


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            password TEXT NOT NULL
        )
    `);
});

app.get('/', (_, res) => {
    res.send('Welcome to the Car Rental');

  });

app.get('/users', (_, res) => {
  
    db.all('SELECT name FROM users', (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        const users = rows.map((row) => (row as { name: string }).name);
        res.json(users);
    });
});

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const requestBody: CreateUserRequestBody = req.body;

        db.get('SELECT * FROM users WHERE name = ?', [requestBody.name], (err, row) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }

            if (row) {
                return res.status(409).send({ error: 'Username taken' });
            }

            bcrypt.hash(requestBody.password, salt, (hashErr, hashedPassword) => {
                if (hashErr) {
                    console.error(hashErr);
                    return res.status(500).send('Internal Server Error');
                }

                db.run('INSERT INTO users (name, password) VALUES (?, ?)', [requestBody.name, hashedPassword], (insertErr) => {
                    if (insertErr) {
                        console.error(insertErr);
                        return res.status(500).send('Internal Server Error');
                    }

                    res.status(201).send('User created successfully');
                });
            });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post('/users/login', async (req, res) => {
    try {
        const { name, password } = req.body;

        
        db.get<{ name: string; password: string } | undefined>(
            'SELECT name, password FROM users WHERE name = ?',
            [name],
            async (err, user) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Internal Server Error');
                }

                if (!user) {
                    return res.status(404).send('User not found');
                }

                const isPasswordValid = await bcrypt.compare(password, user.password);

                if (isPasswordValid) {
                    res.send('Login successful');
                } else {
                    res.status(401).send('Incorrect password');
                }
            }
        );
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
