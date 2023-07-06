import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "chatters-f01ef.firebaseapp.com",
  projectId: "chatters-f01ef",
  storageBucket: "chatters-f01ef.appspot.com",
  messagingSenderId: "695203194350",
  appId: "1:695203194350:web:dc961986b524656453daff",
};

//initialize firebase
initializeApp(firebaseConfig);

//initialize firestore
const db = getFirestore();

//initialize firebase auth
const auth = getAuth();

//initialize firebase storage
const storage = getStorage();

export { auth, db, storage };
