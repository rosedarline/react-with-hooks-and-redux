import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIRBASE_PROJECT_ID,
    storageBucket: process.env.FIRBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
 

  firebase.initializeApp(firebaseConfig);
  export { firebase };
  

  // firebase.database().ref("expenses")
  // .on("child_removed", (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // })

  // firebase.database().ref("expenses")
  // .on("child_changed", (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // firebase.database().ref("expenses")
  // .on("child_added", (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // firebase.database().ref("expenses")
  // .on("value", (snapshot) => {
  //   const expenses = []

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses)
  // });
 

  // firebase.database().ref("expenses")
  // .once("value")
  // .then((snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val(),
  //     });
  //   });
  //   console.log(expenses);
  // });

  // firebase.database().ref("expenses")
  // .once("value")
  // .then((snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val(),
  //     });
  //   });
  //   console.log(expenses);
  // });
  // firebase.database().ref("expenses").push({
  //   description: "Water Bill",
  //   note: "",
  //   amount: 65.00,
  //   createdAt: 150063
  // });

  