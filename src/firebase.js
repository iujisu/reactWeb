// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj7y1uuwK1ZR2HxqDbo-vmxJkqsPQnGv8",
  authDomain: "joinme-9d50d.firebaseapp.com",
  databaseURL: "https://joinme-9d50d-default-rtdb.asia-southeast1.firebasedatabase.app", //Realtime Database 추가
  projectId: "joinme-9d50d",
  storageBucket: "joinme-9d50d.firebasestorage.app",
  messagingSenderId: "524683759605",
  appId: "1:524683759605:web:00369637d6ebd413c01abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const storage = getStorage(app);

export const db = getDatabase(app);

export default app;

