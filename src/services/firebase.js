import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl4zTAeV88cuTKUUzHl-AtOsgEhKLm2ng",
  authDomain: "entrega-react-56a0c.firebaseapp.com",
  projectId: "entrega-react-56a0c",
  storageBucket: "entrega-react-56a0c.appspot.com",
  messagingSenderId: "427443914980",
  appId: "1:427443914980:web:b499cd404195ffefba84f1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);