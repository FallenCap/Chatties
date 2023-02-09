// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9vDoii6L68Yi4hYJVHZPZPcwqWkRmxfQ",
  authDomain: "chatties-b7103.firebaseapp.com",
  projectId: "chatties-b7103",
  storageBucket: "chatties-b7103.appspot.com",
  messagingSenderId: "78182151563",
  appId: "1:78182151563:web:ab665ee69cd490f84aeb8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
