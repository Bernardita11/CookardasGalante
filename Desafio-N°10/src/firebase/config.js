import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCy4aP1Io1YI8Vu0wQFhcVHAMEUaZhMFUQ",
    authDomain: "react-comision38080.firebaseapp.com",
    projectId:"react-comision38080",
    storageBucket:"react-comision38080.appspot.com",
    messagingSenderId:"952233643921",
    appId:"1:952233643921:web:b2e5dab7e727a10ef35430"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);