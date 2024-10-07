import { create } from "zustand";
import { Post } from "../../types/post";
import { getMocksTwitterPost } from "./../../services/post";

type HomeStoreType = {
  posts: Post[];
  loading: boolean;
  setPosts: (post: Post[]) => void;
  setLoading: (loading: boolean) => void;
  addPost: (newPost: Post) => void;
  getPosts: () => void;
};

const useHomeStore = create<HomeStoreType>((set) => ({
  posts: [],
  loading: false,
  setPosts: (post) => set({ posts: post }),
  setLoading: (loading) => set({ loading: loading }),
  addPost: (newPost) => set((state) => ({ posts: [newPost, ...state.posts] })),
  getPosts: async () => {
    set({ loading: true });
    const response = await getMocksTwitterPost();
    set({ posts: response, loading: false });
  },
}));

export default useHomeStore;
