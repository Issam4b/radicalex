
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


import { firebaseConfig } from "./firebKeys";


import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";




//Initialize Firebase and export outside this file


export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);



