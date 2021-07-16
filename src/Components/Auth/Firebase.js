 
import "firebase/auth";
import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyC4J20Voq4Eb7cJHFt51mdIAkh6J5vy3pk",
    authDomain: "picturesque-100db.firebaseapp.com",
    projectId: "picturesque-100db",
    storageBucket: "picturesque-100db.appspot.com",
    messagingSenderId: "574323060376",
    appId: "1:574323060376:web:9698371647d5ffa01a2aed"
  };
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//  } 
  
//  const auth=firebase.auth();
 const googleProvider=new firebase.auth.GoogleAuthProvider();
//  // const githubProvider =  new firebase.auth.GithubAuthProvider();
 
 export { firebaseConfig,googleProvider};