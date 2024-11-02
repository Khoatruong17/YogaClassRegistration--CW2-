import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOhXmVSB-G3m2HXSnb_bTLFSvYz6TA06Q",
  authDomain: "moblie-26b93.firebaseapp.com",
  databaseURL:
    "https://moblie-26b93-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "moblie-26b93",
  storageBucket: "moblie-26b93.appspot.com",
  messagingSenderId: "852760453876",
  appId: "1:852760453876:web:d4ee64075dbdaad27174a1",
  measurementId: "G-W7658WWL57",
};
const app = initializeApp(firebaseConfig);

// Use AsyncStorage for persistence if Firebase version supports it
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
