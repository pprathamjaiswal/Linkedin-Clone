// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import firebase from "firebase";
// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOoY-YeXCx213Kne7eluX46N69okAy0Ig",
    authDomain: "linkedin-clone-5f851.firebaseapp.com",
    databaseURL: "https://linkedin-clone-5f851-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "linkedin-clone-5f851",
    storageBucket: "linkedin-clone-5f851.appspot.com",
    messagingSenderId: "53067031359",
    appId: "1:53067031359:web:595bb0c3f8247417e4a98a",
    measurementId: "G-TVQNZPJ2KM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
