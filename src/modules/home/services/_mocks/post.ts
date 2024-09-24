import { Post } from "../../types/post";

export const post: Post[] = [
  {
    user: {
      name: "John Doe",
      username: "johndoe",
      avatar: "https://randomuser.me/api/portraits",
    },
    content: "This is a post",
    image: "https://via.placeholder.com/150",
    likes: 10,
    retweets: 5,
    comments: 2,
    stats: 17,
    postDate: "2021-01-01 12:00:00",
  },
  {
    user: {
      name: "Jane Doe",
      username: "janedoe",
      avatar: "https://randomuser.me/api/portraits",
    },
    content: "This is another post",
    image: "https://via.placeholder.com/150",
    likes: 20,
    retweets: 10,
    comments: 5,
    stats: 35,
    postDate: "2021-01-01 12:00:00",
  },
  {
    user: {
      name: "John Smith",
      username: "johnsmith",
      avatar: "https://randomuser.me/api/portraits",
    },
    content: "This is a post",
    image: "https://via.placeholder.com/150",
    likes: 10,
    retweets: 5,
    comments: 2,
    stats: 17,
    postDate: "2021-01-01 12:00:00",
  },
  {
    user: {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "https://randomuser.me/api/portraits",
    },
    content: "This is another post",
    image: "https://via.placeholder.com/150",
    likes: 20,
    retweets: 10,
    comments: 5,
    stats: 35,
    postDate: "2021-01-01 12:00:00",
  },
];
