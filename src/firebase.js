import firebase from 'firebase';
import firebaseConfig from './firebaseAPI'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

//provider tells to firebase that we need google auth service
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;