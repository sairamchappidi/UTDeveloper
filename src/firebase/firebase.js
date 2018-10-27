import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyCZEJQQMLjXUXVDXh5HhoXWtetqoUVMNRw",
   authDomain: "utdevwebsite.firebaseapp.com",
   databaseURL: "https://utdevwebsite.firebaseio.com",
   projectId: "utdevwebsite",
   storageBucket: "",
   messagingSenderId: "840813458313"
};

const devConfig = {
  apiKey: "AIzaSyCZEJQQMLjXUXVDXh5HhoXWtetqoUVMNRw",
   authDomain: "utdevwebsite.firebaseapp.com",
   databaseURL: "https://utdevwebsite.firebaseio.com",
   projectId: "utdevwebsite",
   storageBucket: "",
   messagingSenderId: "840813458313"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
