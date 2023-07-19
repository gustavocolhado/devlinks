import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlAl7-lJBDhdKhUsOEojF6YJUv5VRR88g",
  authDomain: "reactlinks-28e3f.firebaseapp.com",
  projectId: "reactlinks-28e3f",
  storageBucket: "reactlinks-28e3f.appspot.com",
  messagingSenderId: "359607109989",
  appId: "1:359607109989:web:1b15702727d61d7fec398c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }