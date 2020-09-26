import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAx9bpcn15jDnDAViF8xbYgKv70j-Ile6g",
    authDomain: "journal-app-ff8c1.firebaseapp.com",
    databaseURL: "https://journal-app-ff8c1.firebaseio.com",
    projectId: "journal-app-ff8c1",
    storageBucket: "journal-app-ff8c1.appspot.com",
    messagingSenderId: "1089617433639",
    appId: "1:1089617433639:web:3ad9fa34458d5a40526a02"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}