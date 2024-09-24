import { wait } from "../../../core/utils/wait";
import { Post } from "../types/post";
import { post } from "./_mocks/post";

export const getPosts = async (): Promise<Post[]> => {
  await wait(1000);
  return new Promise((resolve) => {
    resolve(post);
  });
};

