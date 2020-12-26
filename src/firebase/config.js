import * as firebase from "firebase/app";
// importing firestore
import "firebase/storage";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAnCf4wLjMYB2qpYciLyYwO1CPskLf0yRk",
  authDomain: "firegram-a9637.firebaseapp.com",
  projectId: "firegram-a9637",
  storageBucket: "firegram-a9637.appspot.com",
  messagingSenderId: "918483777717",
  appId: "1:918483777717:web:94bcd70db13670707566fc",
  measurementId: "G-RYMW4K48P5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialising storage
const projectStorage = firebase.storage();
const firestore = firebase.firestore();

export default projectStorage;
