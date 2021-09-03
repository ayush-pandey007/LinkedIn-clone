import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2QulfjjXpgxOQ3XedCMq9MPSr22jLOVQ",
  authDomain: "linkedin-clone-30cf5.firebaseapp.com",
  projectId: "linkedin-clone-30cf5",
  storageBucket: "linkedin-clone-30cf5.appspot.com",
  messagingSenderId: "136219092898",
  appId: "1:136219092898:web:8223298edc4b2da94ef4fb",
  measurementId: "G-Q3MPDRX8FF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
