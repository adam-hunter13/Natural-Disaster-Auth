import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXANlQ6j-9B88U4YQsiZSu-nsFn2Fbyac",
  authDomain: "react-authentication-8ca13.firebaseapp.com",
  projectId: "react-authentication-8ca13",
  storageBucket: "react-authentication-8ca13.appspot.com",
  messagingSenderId: "903219681981",
  appId: "1:903219681981:web:8bcbccb75ea257a8e2f5d4",
  measurementId: "G-SC3JGWH41J"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;