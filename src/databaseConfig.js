import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCjuMvMgodBw9nF6oXYep-I5VUeE0yBSkE",
    authDomain: "test-database-1ceff.firebaseapp.com",
    projectId: "test-database-1ceff",
    storageBucket: "test-database-1ceff.appspot.com",
    messagingSenderId: "1011759037769",
    appId: "1:1011759037769:web:3ba72754c7df795c60ee98",
    measurementId: "G-KZB7P4DDGH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export const createData = async (value) => {
    try {
    const docRef = await addDoc(collection(db, "message"), {userMessage: {
      text: value,
      }
    });
    console.log(collection(db, 'users'));
    
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}