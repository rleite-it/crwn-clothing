import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
	apiKey: "YOUR_API_KEY",
	authDomain: "crwn-db-d84e3.firebaseapp.com",
	projectId: "crwn-db-d84e3",
	storageBucket: "crwn-db-d84e3.appspot.com",
	messagingSenderId: "1034054506101",
	appId: "1:1034054506101:web:a4091cb6f909cdb0068a3c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
