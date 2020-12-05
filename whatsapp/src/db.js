// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyBKlhrAkPK1Cj1w6MVatkSh_ShD31tIeNk",
//   authDomain: "whatsapp-web-app-1312d.firebaseapp.com",
//   databaseURL: "https://whatsapp-web-app-1312d.firebaseio.com",
//   projectId: "whatsapp-web-app-1312d",
//   storageBucket: "whatsapp-web-app-1312d.appspot.com",
//   messagingSenderId: "325197467827",
//   appId: "1:325197467827:web:d1a5dadddb3d4d2de860c6",
//   measurementId: "G-C9RR9M3XNP",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()
// export { auth, provider }
// export default db

let db = [
  {
    id: "1",
    name: "Family chat",
    message: [
      { message: "Hi" },
      { message: "How you doing?" },
      { message: "I've been waiting for you" },
      { message: "please call me" },
    ],
  },
  {
    id: "2",
    name: "Private chat",
    message: [
      { message: "It's Emma" },
      { message: "Where are you?" },
      { message: "Do you know about Smith?" },
      { message: "let me know if you get any info" },
    ],
  },
  {
    id: "3",
    name: "Dormitary chat",
    message: [
      { message: "Hi guys" },
      { message: "Everything is OK" },
      { message: "Do you know about John?" },
      { message: "let me know if you get any info" },
    ],
  },
];

export default db



