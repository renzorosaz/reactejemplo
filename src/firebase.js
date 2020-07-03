import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCfvCyL6YKwzFBECKEhieQYsKb6Ceskou4",
    authDomain: "react-crud-83c82.firebaseapp.com",
    databaseURL: "https://react-crud-83c82.firebaseio.com",
    projectId: "react-crud-83c82",
    storageBucket: "react-crud-83c82.appspot.com",
    messagingSenderId: "644609476685",
    appId: "1:644609476685:web:d8941d5b4506405fa27404"
  };

  const fb= firebase.initializeApp(firebaseConfig);
  export const db= fb.firestore();