import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBX04JKknBkLLq5OlBY8H57j-jwOI6XSfc",
    authDomain: "ak-retail.firebaseapp.com",
    projectId: "ak-retail",
    storageBucket: "ak-retail.appspot.com",
    messagingSenderId: "906378255696",
    appId: "1:906378255696:web:142e15582a22ed16912055",
    measurementId: "G-FZLTT82C82"
  };
  
const app=initializeApp(firebaseConfig);  
const db=getFirestore(app);
const storage=getStorage(app);
export {db,storage};