// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG30mOSjbl5Fbb7SgmxA9UFqffMqGNyfQ",
  authDomain: "react-chat-app-a24dc.firebaseapp.com",
  projectId: "react-chat-app-a24dc",
  storageBucket: "react-chat-app-a24dc.firebasestorage.app",
  messagingSenderId: "118156266900",
  appId: "1:118156266900:web:ccb47aac2cb7916d90d381",
  measurementId: "G-W20DSY89EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;