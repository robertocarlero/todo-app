import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const env = window?.process?.env || import.meta.env;

const firebaseConfig = JSON.parse(env.VITE_FIREBASE_CONFIG || '{}');

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
