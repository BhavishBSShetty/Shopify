import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_fbX8UN3HjhHK8io6AsuVeB0EMLaxX7w",
  authDomain: "shopify-777ae.firebaseapp.com",
  projectId: "shopify-777ae",
  storageBucket: "shopify-777ae.appspot.com",
  messagingSenderId: "806845911867",
  appId: "1:806845911867:web:9b007a84aa71a3bc035d1e",
  measurementId: "G-4TT9P4H6L3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
