// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:pr REACT_APP_apiKey,
  authDomain:pr REACT_APP_authDomain,
  projectId:pr REACT_APP_projectId,
  storageBucket:pr REACT_APP_storageBucket,
  messagingSenderId:pr REACT_APP_messagingSenderId,
  appId:pr REACT_APP_appId,
  measurementId:pr REACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
