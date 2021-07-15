// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDNJ_LMfPklD-cVrN5RAx7a9JqJ_bExIDk",
    authDomain: "myecom-app.firebaseapp.com",
    projectId: "myecom-app",
    storageBucket: "myecom-app.appspot.com",
    messagingSenderId: "271753748915",
    appId: "1:271753748915:web:384eeb8454357524a9abc6",
    measurementId: "G-RX50M7V3QB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

