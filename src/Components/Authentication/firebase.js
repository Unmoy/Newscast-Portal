import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDJ6zsAuJBLRCX-gyN56haKpd2QguE23Rs",
  authDomain: "newscast-portal.firebaseapp.com",
  projectId: "newscast-portal",
  storageBucket: "newscast-portal.appspot.com",
  messagingSenderId: "1087793102648",
  appId: "1:1087793102648:web:8e4dc8363b38ea4a554bcd",
});

export const authentication = app.auth();
export default app;
