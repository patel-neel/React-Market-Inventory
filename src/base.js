import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA3JiIxB48Tli_4ZkHrvHDPVuIifEtN6t0",
  authDomain: "inventory-cotd.firebaseapp.com",
  databaseURL: "https://inventory-cotd-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;