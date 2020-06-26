import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  // apiKey: "AIzaSyBmlF1jTJPxN28yx-WtrsR72Pdy6X18uCM",
  // authDomain: "lookatme-31fb3.firebaseapp.com",
  // databaseURL: "https://lookatme-31fb3.firebaseio.com",
  // projectId: "lookatme-31fb3",
  // storageBucket: "lookatme-31fb3.appspot.com",
  // messagingSenderId: "919353010231",
  // appId: "1:919353010231:web:67b403fb232cbb42cbf7b2"
  // apiKey: 'AIzaSyBmlF1jTJPxN28yx-WtrsR72Pdy6X18uCM',
  // authDomain: 'lookatme-31fb3.firebaseapp.com',
  // databaseURL: 'https://lookatme-31fb3.firebaseio.com',
  // projectId: 'lookatme-31fb3',
  // storageBucket: 'lookatme-31fb3.appspot.com',
  // messagingSenderId: '919353010231',
  // appId: '1:919353010231:web:67b403fb232cbb42cbf7b2',
  apiKey: 'AIzaSyC0BVf3U2JYTvj9XJqcnen72Xeaq0fs27E',
  authDomain: 'lookatme-fe7d7.firebaseapp.com',
  databaseURL: 'https://lookatme-fe7d7.firebaseio.com',
  projectId: 'lookatme-fe7d7',
  storageBucket: 'lookatme-fe7d7.appspot.com',
  messagingSenderId: '895789808807',
  appId: '1:895789808807:web:5df0d8236366462a052f82',
  measurementId: 'G-VMJCJJS5Y8',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
