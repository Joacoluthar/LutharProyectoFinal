import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain: "proyectofinalreacts.firebaseapp.com",
    projectId: "proyectofinalreacts",
    storageBucket: "proyectofinalreacts.appspot.com",
    messagingSenderId: "767226769586",
    appId: "1:767226769586:web:5dae18811295ee2fa859ab"

}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)