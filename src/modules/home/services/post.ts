import { wait } from "../../../core/utils/wait";
import { Post } from "../types/post";
import { post } from "./_mocks/post";

export const getPosts = async (): Promise<Post[]> => {
  await wait(1000);
  return new Promise((resolve) => {
    resolve(post);
  });
};

export const getMocksTwitterPost = async (): Promise<Post[]> => {
  try {
    const resp = await fetch("http://localhost:3000/posts", {
      headers: {
        Authorization: `Bearer ${
          import.meta.env.VITE_APP_TWITTER_BEARER_TOKEN
        }`,
      },
    });
    await wait(1000);
    const response = await resp.json();
    return response;
  } catch (e) {
    return Promise.reject(e);
  }
};
