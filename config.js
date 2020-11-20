import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDQfKR9Y-7FQoSRqyV5Q5pKGdwUjMZESZA",
  authDomain: "wily-62562.firebaseapp.com",
  databaseURL: "https://wily-62562.firebaseio.com",
  projectId: "wily-62562",
  storageBucket: "wily-62562.appspot.com",
  messagingSenderId: "753757382776",
  appId: "1:753757382776:web:ad956a9578ced8d352258d",
  measurementId: "G-5DXQ4EVHGF"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
