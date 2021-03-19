import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiP8zDoV1WXkHqTCBwfbsruC-2I3lfFAg",
    authDomain: "facebook-clone-15bf3.firebaseapp.com",
    projectId: "facebook-clone-15bf3",
    storageBucket: "facebook-clone-15bf3.appspot.com",
    messagingSenderId: "719435354247",
    appId: "1:719435354247:web:5b25a19d240ec938c7e822",
    measurementId: "G-TLYND7QM4C"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

//provider tells to firebase that we need google auth service
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;