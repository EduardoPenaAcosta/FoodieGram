// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWs0UT3z7Mu56QrQyuk1Twa6Cu_WUk_Ic",
  authDomain: "authfirebase-62105.firebaseapp.com",
  projectId: "authfirebase-62105",
  storageBucket: "authfirebase-62105.appspot.com",
  messagingSenderId: "951821038794",
  appId: "1:951821038794:web:09ea98056fb2f479b37033"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };