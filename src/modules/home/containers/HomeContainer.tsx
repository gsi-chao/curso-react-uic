import useFetch from "../../../core/hooks/useFetch";
import PostMetadata from "../components/Post/PostMetadata/PostMetadata";
import { getPosts } from "../services/post";
import { Post } from "../types/post";

const HomeContainer = () => {
  const { data, loading, error } = useFetch<Post>(getPosts);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <div>
      <PostMetadata
        createdAt="2024-09-23 12:00:00"
        fullName="Carlos Chao"
        username="@chao_cortes"
        verified
      />
      {loading && <span>Loading...</span>}
      {data.map((post, key) => (
        <span key={`post-${key}`}>{post.content}</span>
      ))}
    </div>
  );
};

export default HomeContainer;
