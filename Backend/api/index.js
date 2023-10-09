"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const cors_1 = __importDefault(require("cors"));
const sqlite3_1 = __importDefault(require("sqlite3"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'https://davids-car-rental-site.vercel.app',
}));
app.use(express_1.default.json());
const db = new sqlite3_1.default.Database('users.db');
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
        const users = rows.map((row) => row.name);
        res.json(users);
    });
});
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcrypt_1.default.genSalt();
        const requestBody = req.body;
        db.get('SELECT * FROM users WHERE name = ?', [requestBody.name], (err, row) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
            if (row) {
                return res.status(409).send({ error: 'Username taken' });
            }
            bcrypt_1.default.hash(requestBody.password, salt, (hashErr, hashedPassword) => {
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
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}));
app.post('/users/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, password } = req.body;
        db.get('SELECT name, password FROM users WHERE name = ?', [name], (err, user) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
            if (!user) {
                return res.status(404).send('User not found');
            }
            const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
            if (isPasswordValid) {
                res.send('Login successful');
            }
            else {
                res.status(401).send('Incorrect password');
            }
        }));
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
