import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkQ9_ylz84cfkW2YCYoJ-Dmo_IElCzJTk",
  authDomain: "dev-interview-01b.firebaseapp.com",
  projectId: "dev-interview-01b",
  storageBucket: "dev-interview-01b.firebasestorage.app",
  messagingSenderId: "313439603385",
  appId: "1:313439603385:web:28791a4e7f246d0faf6968"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore connection to retrive "addresses" collection
export const db = getFirestore(app);
