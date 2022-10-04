// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHkHlDBp5ywnhSA5jie9ruOLXIPSszSgo",
    authDomain: "e-commerce-bernardita-arauco.firebaseapp.com",
    projectId: "e-commerce-bernardita-arauco",
    storageBucket: "e-commerce-bernardita-arauco.appspot.com",
    messagingSenderId: "70001611337",
    appId: "1:70001611337:web:097fafb0295a89286c2598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);