import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvhquqh2vv59JhqENuxAjoOadeih55St0",
  authDomain: "school-webapp-d8de4.firebaseapp.com",
  projectId: "school-webapp-d8de4",
  storageBucket: "school-webapp-d8de4.appspot.com",
  messagingSenderId: "616270593325",
  appId: "1:616270593325:web:348cce02d9af3e2d6467a4",
};

//init firebase app
const app = initializeApp(firebaseConfig);

//init firebase storage
const db = getFirestore(app);

//init firebase authentification
const auth = getAuth(app)

export {db, auth}
