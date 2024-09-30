import PostCard from "../PostCard/PostCard";
import "./post-list.css";

import { Post } from "@/modules/home/types/post";

type Props = {
  posts: Post[];
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post, key) => (
        <PostCard key={key} post={post} />
      ))}
    </div>
  );
};

export default PostList;
