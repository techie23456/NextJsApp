import { initializeApp } from "firebase/app";

import "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAviFgEDCBux2tWtjIEX2WZMunqNOF37wM",
    authDomain: "fir-demo-73265.firebaseapp.com",
   // databseURL:"https://fir-demo-73265-default-rtdb.firebaseio.com/",
    projectId: "fir-demo-73265",
    storageBucket: "fir-demo-73265.appspot.com",
    messagingSenderId: "910556144231",
    appId: "1:910556144231:web:92285f7822ea00a43c2ac2",
    measurementId: "G-ZMJ5K7MN0V"

};

const app = initializeApp(firebaseConfig);

export default app;