import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUbiNfnR9gRKiYYMl9k4zCOQATcSmF0LY",
  authDomain: "react-authentication-b763b.firebaseapp.com",
  projectId: "react-authentication-b763b",
  storageBucket: "react-authentication-b763b.appspot.com",
  messagingSenderId: "470749613484",
  appId: "1:470749613484:web:5cdf0089651dbbb72efe09",
  measurementId: "G-F8RQKV4VGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
