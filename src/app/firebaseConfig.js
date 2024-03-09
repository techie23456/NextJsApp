
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAviFgEDCBux2tWtjIEX2WZMunqNOF37wM",
  authDomain: "fir-demo-73265.firebaseapp.com",
  databseURL:"https://fir-demo-73265-default-rtdb.firebaseio.com/",
  projectId: "fir-demo-73265",
  storageBucket: "fir-demo-73265.appspot.com",
  messagingSenderId: "910556144231",
  appId: "1:910556144231:web:92285f7822ea00a43c2ac2",
  measurementId: "G-ZMJ5K7MN0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {database};
