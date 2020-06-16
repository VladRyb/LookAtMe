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
  apiKey: 'AIzaSyBmlF1jTJPxN28yx-WtrsR72Pdy6X18uCM',
  authDomain: 'lookatme-31fb3.firebaseapp.com',
  databaseURL: 'https://lookatme-31fb3.firebaseio.com',
  projectId: 'lookatme-31fb3',
  storageBucket: 'lookatme-31fb3.appspot.com',
  messagingSenderId: '919353010231',
  appId: '1:919353010231:web:67b403fb232cbb42cbf7b2',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
