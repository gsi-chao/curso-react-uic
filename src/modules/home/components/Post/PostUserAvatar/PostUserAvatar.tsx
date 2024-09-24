import "./post-user-avatar.css";

type Props = {
  imgUrl: string;
  alt?: string;
};

const PostUserAvatar: React.FC<Props> = ({ imgUrl, alt }) => {
  return <img src={imgUrl} alt={alt && "User Avatar"} className="avatar" />;
};

export default PostUserAvatar;
