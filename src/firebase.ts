import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmtfDzm9E60WoFez0fNUrmPpsws20_iH8",
  authDomain: "portfolio-d5338.firebaseapp.com",
  projectId: "portfolio-d5338",
  storageBucket: "portfolio-d5338.firebasestorage.app",
  messagingSenderId: "249744131083",
  appId: "1:249744131083:web:a0f2d925257b44b04df30e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;