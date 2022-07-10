import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB5a1Mtu6yANRNWKq0w4eeR0huGfyYmt10",
    authDomain: "twitter-clone-3ec8c.firebaseapp.com",
    projectId: "twitter-clone-3ec8c",
    databaseURL:"https://twitter-clone-3ec8c",
    storageBucket: "twitter-clone-3ec8c.appspot.com",
    messagingSenderId: "473159290160",
    appId: "1:473159290160:web:b3c27f9c2cbb63f1024cf5",
    measurementId: "G-8PG7F7S208"
  };

  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;