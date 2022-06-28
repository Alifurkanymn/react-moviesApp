import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCXWPYmF8oc4E0EsnwETay81-S_mbITRZs",
    authDomain: "react-movie-dffb6.firebaseapp.com",
    projectId: "react-movie-dffb6",
    storageBucket: "react-movie-dffb6.appspot.com",
    messagingSenderId: "657058470238",
    appId: "1:657058470238:web:6a4d85395059d04adbd7cf",
    measurementId: "G-T16LMQQ0XF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;