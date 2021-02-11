import firebase from 'firebase';
import 'firebase/database'


var firebaseConfig = {
       apiKey: "AIzaSyB1YH7nLOJ26sbQB08SguLQ2qWqi1OTm-U",
       authDomain: "anythingbuthuman-426fc.firebaseapp.com",
       projectId: "anythingbuthuman-426fc",
       storageBucket: "anythingbuthuman-426fc.appspot.com",
       messagingSenderId: "745308440161",
       appId: "1:745308440161:web:8cd8487a8c082e49b80c20",
       measurementId: "G-XHTKEGWVPM"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
