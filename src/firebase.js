// import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";
// firebase config
const config = {
  apiKey: "AIzaSyAXJ1t9Ejh2_vOgmPPRjiV6bzcIKWfiQkM",
  authDomain: "ecom-deadd.firebaseapp.com",
  projectId: "ecom-deadd",
  storageBucket: "ecom-deadd.appspot.com",
  messagingSenderId: "905866893251",
  appId: "1:905866893251:web:84bd976f9d5f62fd934f76",
  measurementId: "G-4DM539LGK1",
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
