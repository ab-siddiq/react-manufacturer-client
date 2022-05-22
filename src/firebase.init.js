// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
  
  apiKey: "AIzaSyCpbVoLIXIOVge3yjPS8iewr6jDugQBDSw",
  authDomain: "react-exp-cycle-eqp-manufactur.firebaseapp.com",
  projectId: "react-exp-cycle-eqp-manufactur",
  storageBucket: "react-exp-cycle-eqp-manufactur.appspot.com",
  messagingSenderId: "921081619777",
  appId: "1:921081619777:web:34916e5a5417ee60daadc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;