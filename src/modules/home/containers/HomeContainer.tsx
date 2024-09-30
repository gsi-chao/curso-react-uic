import AppLoader from "@/core/components/loading/AppLoader";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import useFetch from "../../../core/hooks/useFetch";
import NewPost from "../components/NewPost/NewPost";
import PostList from "../components/Post/PostList/PostList";
import RelevantInfo from "../components/RelevantInfo/RelevantInfo";
import MainLayout from "../layout/MainLayout";
import { getMocksTwitterPost } from "../services/post";
import { Post } from "../types/post";


// TODO Exampler Purpose
export const PostContext = createContext<{
  id: number;
  setNumber: Dispatch<SetStateAction<number>>;
}>({
  id: 0,
  setNumber: () => {},
});

const HomeContainer = () => {
  const { data, loading, error } = useFetch<Post>(getMocksTwitterPost);
  const [number, setNumber] = useState(0);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <PostContext.Provider value={{ id: number, setNumber }}>
      Number: {number}
      <MainLayout sidebar={<RelevantInfo />}>
        <>
          {loading && <AppLoader />}
          <NewPost />
          <PostList posts={data} />
        </>
      </MainLayout>
    </PostContext.Provider>
  );
};

export default HomeContainer;
