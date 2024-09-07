// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGGIZLr4vthaXDgVTbhJbREQXdVUpRFEQ",
  authDomain: "course-file-7e4f7.firebaseapp.com",
  projectId: "course-file-7e4f7",
  storageBucket: "course-file-7e4f7.appspot.com",
  messagingSenderId: "627113890731",
  appId: "1:627113890731:web:5eb3dc9b675d51d73d78ee"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);