import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("register").onclick = () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Registered Successfully"))
    .catch(err => alert(err.message));
};

document.getElementById("login").onclick = () => {
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
};
