
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_2BqJs2dVxB1Sa7jABwPgihhMu8cQ2Pg",
  authDomain: "rentify-73df8.firebaseapp.com",
  projectId: "rentify-73df8",
  storageBucket: "rentify-73df8.appspot.com",
  messagingSenderId: "217432575896",
  appId: "1:217432575896:web:35e2185f9755b223f465ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
var provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

// Initialize Firestore
// export const firestore = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

// export const db=getFirestore(app);


export {provider};
export default app;
