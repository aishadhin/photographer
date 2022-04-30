// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWj--kkZ7kko0pgAg2SHYz2orUXYL3MY4",
  authDomain: "shadhin-photography.firebaseapp.com",
  projectId: "shadhin-photography",
  storageBucket: "shadhin-photography.appspot.com",
  messagingSenderId: "271222582182",
  appId: "1:271222582182:web:3d86712f49854022293d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;