// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkycE_HiGHFO001Az5nM-47lgT0e_h-co",
  authDomain: "super-genius-car-services.firebaseapp.com",
  projectId: "super-genius-car-services",
  storageBucket: "super-genius-car-services.appspot.com",
  messagingSenderId: "589733143211",
  appId: "1:589733143211:web:cd53154190fe60753d0dee",
  measurementId: "G-ZX2LH1X73H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
