import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
} from "firebase/firestore";
import { TPost } from "../components/Post/Post";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const FIRESTORE_COLLECTION_NAME = "posts";

export const getDataFromFirestore = async (): Promise<TPost[]> => {
  const postsCollection = collection(db, FIRESTORE_COLLECTION_NAME);
  const postsQuery = query(postsCollection);
  const postsFromFirestore = await getDocs(postsQuery);

  const posts = postsFromFirestore.docs.map((post) => ({
    id: post.id,
    date: post.data().date,
    title: post.data().title,
    text: post.data().text,
  }));
  return posts;
};

export const addDataToFirestore = async (newPost: TPost): Promise<void> => {
  try {
    await setDoc(doc(db, FIRESTORE_COLLECTION_NAME, newPost.id), {
      date: newPost.date,
      title: newPost.title,
      text: newPost.text,
    });
    console.log(newPost);
  } catch (e) {
    console.error("Ошибка добавления поста: ", e);
  }
};

export const updateDataInFirestore = async (post: TPost): Promise<void> => {
  const postRef = doc(db, FIRESTORE_COLLECTION_NAME, post.id);
  await updateDoc(postRef, {
    title: post.title,
    text: post.text,
    date: post.date,
  });
};

export const deleteDataFromFirestore = async (post: TPost) => {
  const postRef = doc(db, FIRESTORE_COLLECTION_NAME, post.id);
  try {
    await deleteDoc(postRef);
  } catch (e) {
    console.error("Ошибка удаления поста: ", e);
  }
};
