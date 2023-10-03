import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors'

// Define an interface for the expected request body
interface CreateUserRequestBody {
    name: string;
    password: string;
}

const app = express();
const users: { name: string; password: string }[] = [];

app.use(cors({
    origin: 'http://localhost:5173',
    // You can configure other CORS options as needed
}));

app.use(express.json())

app.get('/users', (req: Request, res: Response) => {
    res.json(users);
    console.log(req)
});

app.post('/users', async (req: Request, res: Response) => {
    try {
        const salt = await bcrypt.genSalt();
        // Use the defined interface to specify the structure of the request body
        const requestBody: CreateUserRequestBody = req.body;

        if (requestBody && requestBody.name && requestBody.password) {
            const hashedPassword = await bcrypt.hash(requestBody.password, salt);
            const user = { name: requestBody.name, password: hashedPassword };
            users.push(user);
            res.status(201).send('User created successfully');
        } else {
            res.status(400).json({ error: 'Bad Request: Missing or invalid data' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
   
    if(user === undefined) {
        return res.status(400).send('cannot find user')
    }

    try{
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        }else{
            res.send('Not Allowed')
        }

    }catch{
        res.status(500).send()
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
