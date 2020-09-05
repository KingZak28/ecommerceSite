import firebase from "firebase/app";
import PrettyButton from "../components/prettyButton/prettyButton";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyADZoOsgAZfDWI-R8LO-eYwciNmG3greYE",
  authDomain: "boodb-54e6c.firebaseapp.com",
  databaseURL: "https://boodb-54e6c.firebaseio.com",
  projectId: "boodb-54e6c",
  storageBucket: "boodb-54e6c.appspot.com",
  messagingSenderId: "655332113058",
  appId: "1:655332113058:web:4cf97632d388732ff9f5fb",
  measurementId: "G-RXDJZVVBSJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// We always want to trigger the google pop up whenever the google auth provider is used
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
