import RootLayout from "@/layout/RootLayout";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";
import {
  HomeContainer,
  HomeZustandContainer,
  PostDetailContainer,
} from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomeContainer />,
      },
      {
        path: "home-zustand",
        element: <HomeZustandContainer />,
      },
      {
        path: "post/:id/:name",
        element: <PostDetailContainer />,
        children: [],
      },
    ],
  },
]);
