// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2tHpqG9mKr_l2JlSZmgPSoharUtP5CkA",
  authDomain: "authentication-no-form.firebaseapp.com",
  projectId: "authentication-no-form",
  storageBucket: "authentication-no-form.appspot.com",
  messagingSenderId: "293581424200",
  appId: "1:293581424200:web:7f84d45bf162dd3c27fa7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;