import AppLoader from "@/core/components/loading/AppLoader";
import { useEffect } from "react";
import PostList from "../components/Post/PostList/PostList";
import { getMocksTwitterPost } from "../services/post";
import { useHomeContext } from "../store/home";

const HomePostListContainer = () => {
  const { state, dispatch } = useHomeContext();

  const getPosts = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const posts = await getMocksTwitterPost();
      dispatch({ type: "SET_POSTS", payload: posts });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (e) {
      console.error(e);
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {state.loading && <AppLoader />}
      <PostList posts={state.posts} />
    </>
  );
};

export default HomePostListContainer;
