import firebase from 'firebase'
import 'firebase/firestore'
// Required for side-effects

var firebaseConfig = {
    apiKey: "AIzaSyCdRnsMb_AtYOoHoPaVoWWJq3VCE2Aze44",
    authDomain: "divestedspace-31b1d.firebaseapp.com",
    databaseURL: "https://divestedspace-31b1d.firebaseio.com",
    projectId: "divestedspace-31b1d",
    storageBucket: "divestedspace-31b1d.appspot.com",
    messagingSenderId: "136659798386",
    appId: "1:136659798386:web:32f53c0b34cbf98b5ab5eb",
    measurementId: "G-K5EE6P2HJE"
  };
  firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.firestore()
