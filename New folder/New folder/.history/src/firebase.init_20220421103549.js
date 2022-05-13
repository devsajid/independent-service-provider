// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.enREACT_APP_apiKey,
  authDomain: process.enREACT_APP_authDomain,
  projectId: process.enREACT_APP_projectId,
  storageBucket: process.enREACT_APP_storageBucket,
  messagingSenderId: process.enREACT_APP_messagingSenderId,
  appId: process.enREACT_APP_appId,
  measurementId: process.enREACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
