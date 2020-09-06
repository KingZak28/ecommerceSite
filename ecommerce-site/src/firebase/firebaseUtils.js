import firebase from "firebase/app";
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

// Take the user auth object and then store it inside a DB
export const createUserProfileDocument = async (userAuth, restOfData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    // In order to perform CRUD operations we need to use a document reference object not just a snapshot
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...restOfData,
      });
    } catch (e) {
      console.log("error adding new user", e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// We always want to trigger the google pop up whenever the google auth provider is used
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
