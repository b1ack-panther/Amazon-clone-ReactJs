import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB_GwNghsqmSgVRcdgsta026CypgMVZOkQ",
	authDomain: "challenge-c55fa.firebaseapp.com",
	projectId: "challenge-c55fa",
	storageBucket: "challenge-c55fa.appspot.com",
	messagingSenderId: "371684537930",
	appId: "1:371684537930:web:001e61828ac83d1d4498b3",
	measurementId: "G-3RLSM3E47T",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
