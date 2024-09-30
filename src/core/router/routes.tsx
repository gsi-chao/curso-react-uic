import { lazy } from "react";

const HomeContainer = lazy(
  () => import("../../modules/home/containers/HomeContainer")
);

const PostDetailContainer = lazy(
  () =>
    import("../../modules/home/modules/post/containers/PostDetailsContainer")
);

export { HomeContainer, PostDetailContainer };
