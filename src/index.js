import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCvtYHd4OQqhXG2HwR4UvLVd7j1EdVF9s",
  authDomain: "cookardas.firebaseapp.com",
  projectId: "cookardas",
  storageBucket: "cookardas.appspot.com",
  messagingSenderId: "1050950575232",
  appId: "1:1050950575232:web:e856df0dd922276669b265",
  measurementId: "G-6M5NYKDBHD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(analytics);
