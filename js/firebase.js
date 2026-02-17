import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDG04yYgOuoSOPpLOERVKjvP3HQUBBOUX8",
  authDomain: "prepvault-22769.firebaseapp.com",
  projectId: "prepvault-22769",
  storageBucket: "prepvault-22769.firebasestorage.app",
  messagingSenderId: "930353831380",
  appId: "1:930353831380:web:7281ff35ed9359ea980a41",
  measurementId: "G-C9TGBVWN70"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
