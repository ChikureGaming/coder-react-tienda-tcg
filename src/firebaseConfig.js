// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa0MEgq9hJnBp3RD37HDHen1-HE5DQ9io",
  authDomain: "pinguin-tcg.firebaseapp.com",
  projectId: "pinguin-tcg",
  storageBucket: "pinguin-tcg.appspot.com",
  messagingSenderId: "552048837566",
  appId: "1:552048837566:web:c0a367111202481d54efef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)