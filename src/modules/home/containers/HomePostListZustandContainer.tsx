import AppLoader from "@/core/components/loading/AppLoader";
import { useEffect } from "react";
import PostList from "../components/Post/PostList/PostList";
import useHomeStore from "../store/home-zustand/store";

const HomePostListZustandContainer = () => {
  const { posts, loading, getPosts } = useHomeStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {loading && <AppLoader />}
      <PostList posts={posts} />
    </>
  );
};

export default HomePostListZustandContainer;
