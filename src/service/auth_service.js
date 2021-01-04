import firebase from "firebase/app";
import { firebaseAuth } from "./firebase";

export default class AuthService {
  loginWith(provider) {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    return firebaseAuth.signInWithPopup(authProvider);
  }

  login(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(email, password) {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return firebaseAuth.signOut();
  }

  userState(setFunction) {
    return firebaseAuth.onAuthStateChanged(setFunction);
  }

  updateProfile(contents) {
    return firebaseAuth.currentUser.updateProfile(contents);
  }
}
