import { makeAutoObservable, runInAction } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { TPost } from "../components/Post/Post";
import {
  addDataToFirestore,
  deleteDataFromFirestore,
  updateDataInFirestore,
} from "../firebase/firebase";
import { TEXT_LENGTH } from "../pages/PostsPage/PostsPage";
import { getDate } from "../utils/getDate";
import { getPosts } from "../utils/getPosts";

class PostStore {
  formData = { title: "", text: "" };

  isLoading: boolean = true;

  isErrorGetPosts: boolean = false;

  posts: TPost[] = [];

  selectedPost: TPost = {
    id: "",
    title: "",
    date: "",
    text: "",
  };

  isModalOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPosts() {
    const posts = await getPosts();

    runInAction(() => {
      if (posts.length === 0) {
        this.isErrorGetPosts = true;
      }

      this.posts = posts;
      this.isLoading = false;
    });
  }

  isInvalidTextLength: () => boolean = () => {
    return (
      this.formData.title.length > TEXT_LENGTH.titleMax ||
      this.formData.text.length > TEXT_LENGTH.textMax ||
      this.formData.title.length <= TEXT_LENGTH.textZero ||
      this.formData.text.length <= TEXT_LENGTH.textZero
    );
  };

  handleInputChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    this.formData = { ...this.formData, [name]: value };
  };

  handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  handleAddButtonClick = async () => {
    const newPost = {
      id: uuidv4(),
      date: getDate(),
      title: this.formData.title,
      text: this.formData.text,
    };

    addDataToFirestore(newPost);
    this.posts.push(newPost);
    this.formData = { title: "", text: "" };
  };

  handleUpdatePost(selectedPost: TPost) {
    const updatedPost = {
      id: selectedPost.id,
      date: getDate(),
      title: this.formData.title,
      text: this.formData.text,
    };

    updateDataInFirestore(updatedPost);

    this.posts = this.posts.map((post) =>
      post.id === selectedPost.id ? { ...updatedPost } : post
    );

    this.selectedPost = { id: "", title: "", date: "", text: "" };
    this.formData = { title: "", text: "" };
    this.isModalOpen = false;
  }

  handleDeleteButtonClick = (post: TPost) => {
    deleteDataFromFirestore(post);
    this.posts = this.posts.filter((postId) => post.id != postId.id);
  };

  handleEditButtonClick = (formData: TPost) => {
    this.selectedPost = { ...formData };
    this.isModalOpen = true;
  };
}

export default new PostStore();
