import { createContext, Dispatch, SetStateAction } from "react";
import HomeTabs from "../components/HomeTabs/HomeTabs";
import NewPostContainer from "../components/NewPost/NewPostContainer";
import RelevantInfo from "../components/RelevantInfo/RelevantInfo";
import MainLayout from "../layout/MainLayout";
import { HomeProvider } from "../store/home";
import HomePostListContainer from "./HomePostListContainer";

// TODO Exampler Purpose
export const PostContext = createContext<{
  id: number;
  setNumber: Dispatch<SetStateAction<number>>;
}>({
  id: 0,
  setNumber: () => {},
});

const HomeContainer = () => {
  return (
    <HomeProvider>
      <MainLayout sidebar={<RelevantInfo />}>
        <>
          <HomeTabs />
          <NewPostContainer />
          <HomePostListContainer />
        </>
      </MainLayout>
    </HomeProvider>
  );
};

export default HomeContainer;
