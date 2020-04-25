import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBRPcnt_UJ3BuHrrt4Fgwgmhd9tVv2ltEw',
  authDomain: 'crwn-clothing-db-e29b8.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-e29b8.firebaseio.com',
  projectId: 'crwn-clothing-db-e29b8',
  storageBucket: 'crwn-clothing-db-e29b8.appspot.com',
  messagingSenderId: '323937206704',
  appId: '1:323937206704:web:7d964caf60f5dd71ddd675',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
