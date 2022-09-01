import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5nwzr7c3x5ssuIh7IafkV1r3YptnLOtg",
  authDomain: "payment-be523.firebaseapp.com",
  projectId: "payment-be523",
  storageBucket: "payment-be523.appspot.com",
  messagingSenderId: "826808204248",
  appId: "1:826808204248:web:ab609612b5980d0380d0ad",
  measurementId: "G-EEY5K7JXR0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
