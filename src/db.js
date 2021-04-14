import firebase from 'firebase/app';
import 'firebase/database';

const  config = {
    apiKey: "AIzaSyDVlgUW45-j-1OAWlx_3YPv4V1WOrZCV5I",
    authDomain: "cryptoyect-chat.firebaseapp.com",
    projectId: "cryptoyect-chat",
    storageBucket: "cryptoyect-chat.appspot.com",
    messagingSenderId: "955238500743",
    appId: "1:955238500743:web:89e3620c647062f5b5ab22"  
};
// Initialize Firebase
const db = firebase.initializeApp(config);

export default db;