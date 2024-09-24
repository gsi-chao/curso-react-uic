import "./post-metadata.css";

import { getTimeOffsetOrDate } from "../../../../../core/utils/data";
import PostMetadataVerified from "./PostMetadataVerified";

type Props = {
  username: string;
  fullName: string;
  createdAt: string;
  verified?: boolean;
};

const PostMetadata: React.FC<Props> = ({
  createdAt,
  fullName,
  username,
  verified,
}) => {
  return (
    <div className="post-metadata-container">
      <div className="post-metadata-user">
        <span>{fullName}</span>
        {verified && <PostMetadataVerified />}
      </div>
      <div className="post-metadata-user-time">
        <span className="post-metadata-user-time-username">{username}</span>
        <span>{getTimeOffsetOrDate(createdAt)}</span>
      </div>
    </div>
  );
};

export default PostMetadata;
