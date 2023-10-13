import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

// Register a new user
const registerUser = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Sign in a user
const signInUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Sign out
const signUserOut = async () => {
  await signOut(auth);
};

export { registerUser, signInUser, signUserOut };
