// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwtAHrwRoxXOJqN6nDoHrXWh-hcuf5JzM',
  authDomain: 'rn-gas-station-app.firebaseapp.com',
  projectId: 'rn-gas-station-app',
  storageBucket: 'rn-gas-station-app.appspot.com',
  messagingSenderId: '859936380336',
  appId: '1:859936380336:web:2e9f5640777d231fc0b275',
  databaseURL: 'https://rn-gas-station-app-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Iniialize Db
export const db = getDatabase(app);
