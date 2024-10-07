import { Post } from "../../types/post";

export type HomeStateType = {
  posts: Post[];
  loading: boolean;
};

const initialState: HomeStateType = {
  posts: [],
  loading: false,
};

export default initialState;
