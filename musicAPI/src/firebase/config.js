import Firebase from 'firebase';
import "firebase/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9gTH5X8VPCmHVjMv-xie6DYeLUEwEDW4",
    authDomain: "my-app-c1c5a.firebaseapp.com",
    projectId: "my-app-c1c5a",
    storageBucket: "my-app-c1c5a.appspot.com",
    messagingSenderId: "378562278978",
    appId: "1:378562278978:web:c02f802c7be4ed84e55fdb",
    measurementId: "G-7L6LB6DDTR"
  };

  const firebase = Firebase.initializeApp(firebaseConfig);

  export {firebase};