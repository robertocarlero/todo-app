import { initializeApp } from "firebase/app";

const env = window?.process?.env || import.meta.env;

const firebaseConfig = JSON.parse(env.VITE_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig);