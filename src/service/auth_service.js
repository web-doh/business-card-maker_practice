import firebase from "firebase/app";
import firebaseApp from "./firebase";
import "firebase/auth";

export default class AuthService {
  loginWith(provider) {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  login(email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }

  signUp(email, password) {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return firebaseApp.auth().signOut();
  }

  userState(setFunction) {
    return firebaseApp.auth().onAuthStateChanged(setFunction);
  }
}
