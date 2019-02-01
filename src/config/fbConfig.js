import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxIS5ptSSLGGkfdDesGJg5H88abCWXQfk",
    authDomain: "project-plan-7495b.firebaseapp.com",
    databaseURL: "https://project-plan-7495b.firebaseio.com",
    projectId: "project-plan-7495b",
    storageBucket: "project-plan-7495b.appspot.com",
    messagingSenderId: "733943571682"
  };

  firebase.initializeApp(config);
  //firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;