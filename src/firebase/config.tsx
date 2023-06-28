import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDblHBhOpz4fmuvI1K1gZtDJg9mD28SaF0",
  authDomain: "chatters-f01ef.firebaseapp.com",
  projectId: "chatters-f01ef",
  storageBucket: "chatters-f01ef.appspot.com",
  messagingSenderId: "695203194350",
  appId: "1:695203194350:web:dc961986b524656453daff",
};

//initialize firebase
initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth();

export { auth };
