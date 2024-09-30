import { Post } from "../../../types/post";
import PostMetadata from "../PostMetadata/PostMetadata";
import PostStats from "../PostStats/PostStats";
import PostUserAvatar from "../PostUserAvatar/PostUserAvatar";
import "./post-card.css";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const { image, user, comments, content, likes, postDate, retweets, stats } =
    post;
  return (
    <div className="post-card-container">
      <PostUserAvatar imgUrl={user.avatar} alt={user.username} />
      <div className="post-card-body">
        <PostMetadata
          createdAt={postDate}
          fullName={user.name}
          username={user.username}
          verified={user.verified}
        />
        <p className="post-card-body-content">{content}</p>
        {image && <img src={image} alt={content} className="post-card-body-image" />}
        <PostStats
          comments={comments}
          likes={likes}
          retweets={retweets}
          stats={stats}
        />
      </div>
    </div>
  );
};

export default PostCard;
