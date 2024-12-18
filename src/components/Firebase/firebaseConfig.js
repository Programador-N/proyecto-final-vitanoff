// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrZuGjoIl44QBKMF1TySprmDMQjdlvV0",
  authDomain: "messirveeuu-db.firebaseapp.com",
  projectId: "messirveeuu-db",
  storageBucket: "messirveeuu-db.appspot.com",  // Corregido aquí
  messagingSenderId: "611835522987",
  appId: "1:611835522987:web:17d58c3d713fca73a3ecee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
