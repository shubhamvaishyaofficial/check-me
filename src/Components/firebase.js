import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3HJFcIadNEMKpP_FJfNKtd9vB0LfLl0M",
    authDomain: "check-me-14d06.firebaseapp.com",
    projectId: "check-me-14d06",
    storageBucket: "check-me-14d06.appspot.com",
    messagingSenderId: "478551419587",
    appId: "1:478551419587:web:3831058f3461e182121076"
  };
  
  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();

  const auth = firebase.auth();
  

  export {db,auth}
