import { storage, db } from "./firebase.js";
import {
  ref, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import {
  addDoc, collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("upload").onclick = async () => {
  const file = pdf.files[0];
  const storageRef = ref(storage, "pdfs/" + file.name);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);

  await addDoc(collection(db, "materials"), {
    title: title.value,
    url
  });

  alert("Uploaded Successfully");
};
