import AppLoader from "@/core/components/loading/AppLoader";
import useFetch from "../../../core/hooks/useFetch";
import PostList from "../components/Post/PostList/PostList";
import RelevantInfo from "../components/RelevantInfo/RelevantInfo";
import MainLayout from "../layout/MainLayout";
import { getPosts } from "../services/post";
import { Post } from "../types/post";

const HomeContainer = () => {
  const { data, loading, error } = useFetch<Post>(getPosts);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <MainLayout sidebar={<RelevantInfo />}>
      <>
        {loading && <AppLoader />}
        <PostList posts={data} />
      </>
    </MainLayout>
  );
};

export default HomeContainer;
