import { db } from "./firebase.js";
import { collection, getDocs } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const list = document.getElementById("materials");

const snapshot = await getDocs(collection(db, "materials"));
snapshot.forEach(doc => {
  const data = doc.data();
  list.innerHTML += `
    <li>
      ${data.title}
      <a href="${data.url}" target="_blank">Download</a>
    </li>`;
});
