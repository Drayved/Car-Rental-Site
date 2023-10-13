import admin from 'firebase-admin';
import functions from 'firebase-functions';
import express from 'express';
import 'firebase/auth';

const serviceAccount = require('./your-firebase-adminsdk-json-file.json') as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(express.json());

// User registration
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  admin
    .auth()
    .createUser({
      email,
      password,
    })
    .then((userRecord) => {
      res.status(201).json({ message: 'User registered successfully' });
    })
    .catch((error) => {
      res.status(400).json({ message: 'Registration failed', error });
    });
});

// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  admin
  .auth()
  .getUserByEmail(email) // Get the user by email
  .then((userRecord) => {
    const userUID = userRecord.uid;
    return admin.auth().updateUser(userUID, {
      password,
    });
  })
  .then(() => {
    res.status(200).json({ message: 'Login successful' });
  })
  .catch((error) => {
    res.status(401).json({ message: 'Login failed', error });
  });
});

export const api = functions.https.onRequest(app);
