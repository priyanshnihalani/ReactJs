// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgKs4Hg-z-LEZFUP8kmFEmllddLTh2DM0",
  authDomain: "todo-53d53.firebaseapp.com",
  projectId: "todo-53d53",
  storageBucket: "todo-53d53.appspot.com",
  messagingSenderId: "964493881897",
  appId: "1:964493881897:web:3de68e40d0261d591ae238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)