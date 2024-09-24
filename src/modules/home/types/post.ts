export type Post = {
  user: PostUser;
  content: string;
  image: string;
  likes: number;
  retweets: number;
  comments: number;
  stats: number;
  postDate: string;
};

export type PostUser = {
  name: string;
  username: string;
  avatar: string;
};
