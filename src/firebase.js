import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAsvxc87ycDDAFSv2CeoATdTl_Kw-nCDlk",
  authDomain: "react-slack-clone-bed12.firebaseapp.com",
  databaseURL: "https://react-slack-clone-bed12.firebaseio.com",
  projectId: "react-slack-clone-bed12",
  storageBucket: "react-slack-clone-bed12.appspot.com",
  messagingSenderId: "824834818231",
  appId: "1:824834818231:web:7eeef9ab8fd59efe804d32",
  measurementId: "G-1WKEGVWEHW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
