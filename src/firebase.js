import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAR2pEFXcVu3UU3PsyqkB929dYFHlZOP24",
    authDomain: "messenger-app-20919.firebaseapp.com",
    projectId: "messenger-app-20919",
    storageBucket: "messenger-app-20919.appspot.com",
    messagingSenderId: "854352614544",
    appId: "1:854352614544:web:5bcad6246c1295d7ec3415"
  }).auth();