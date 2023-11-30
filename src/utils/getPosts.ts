import { getDataFromFirestore } from "../firebase/firebase";

export const getPosts = async () => {
  try {
    const posts = await getDataFromFirestore();

    if (posts.length === 0) {
      throw new Error("Нет постов");
    }

    return posts;
  } catch (error) {
    console.log(error);
    return [];
  }
};
