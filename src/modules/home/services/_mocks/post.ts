import { Post } from "../../types/post";

export const post: Post[] = [
  {
    user: {
      name: "John Doe",
      username: "johndoe",
      avatar: "https://i.pravatar.cc/300",
    },
    content: "This is a post",
    image: "https://picsum.photos/200/200",
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
      avatar: "https://i.pravatar.cc/300",
    },
    content: "This is another post",
    image: "https://picsum.photos/200/200",
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
      avatar: "https://i.pravatar.cc/300",
    },
    content: "This is a post",
    image: "https://picsum.photos/200/200",
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
      avatar: "https://i.pravatar.cc/300",
    },
    content: "This is another post",
    image: "https://picsum.photos/200/200",
    likes: 20,
    retweets: 10,
    comments: 5,
    stats: 35,
    postDate: "2021-01-01 12:00:00",
  },
];
