import { Post } from "../../types/post";

export type HomeStoreTypes = "SET_POSTS" | "SET_LOADING" | "ADD_POST";

type Action<T> = {
  type: HomeStoreTypes;
  payload: T;
};

interface ISetPosts extends Action<Post[]> {
  type: "SET_POSTS";
}

interface ISetLoading extends Action<boolean> {
  type: "SET_LOADING";
}

interface IAddPost extends Action<Post> {
  type: "ADD_POST";
}

export type TAction = ISetPosts | ISetLoading | IAddPost;
