import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APIKEY,
  authDomain: process.env.REACT_AUTHDOMAIN,
  projectId: process.env.REACT_PROJECTID,
  storageBucket: process.env.REACT_STORAGEBUDKET,
  messagingSenderId: process.env.REACT_MESSAGESENDERID,
  appId: process.env.REACT_APPID,
  measurementId: process.env.REACT_MEASUREMENTID
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);