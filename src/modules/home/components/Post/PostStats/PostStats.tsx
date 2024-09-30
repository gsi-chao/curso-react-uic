import "./post-stats.css";

import {
    CommentsIcon,
    HeartIcon,
    RetweetsIcon,
    StatsIcon,
} from "@/core/components/icons";

type Props = {
  likes: number;
  retweets: number;
  comments: number;
  stats: number;
};

const PostStats: React.FC<Props> = ({ likes, retweets, comments, stats }) => {
  return (
    <div className="post-stats-container">
      <div className="post-stats-item post-stats-item-comment">
        <CommentsIcon />
        <span>{comments}</span>
      </div>
      <div className="post-stats-item post-stats-item-retweet">
        <RetweetsIcon />
        <span>{retweets}</span>
      </div>
      <div className="post-stats-item post-stats-item-likes">
        <HeartIcon />
        <span>{likes}</span>
      </div>
      <div className="post-stats-item post-stats-item-stats">
        <StatsIcon />
        <span>{stats}</span>
      </div>
    </div>
  );
};

export default PostStats;
