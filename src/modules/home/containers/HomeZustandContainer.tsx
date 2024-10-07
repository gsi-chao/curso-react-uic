import HomeTabs from "../components/HomeTabs/HomeTabs";
import NewPost from "../components/NewPost/NewPost";
import RelevantInfo from "../components/RelevantInfo/RelevantInfo";
import MainLayout from "../layout/MainLayout";
import HomePostListZustandContainer from "./HomePostListZustandContainer";

// TODO Exampler Purpose
const HomeZustandContainer = () => {
  return (
    <MainLayout sidebar={<RelevantInfo />}>
      <>
        <HomeTabs />
        <NewPost />
        <HomePostListZustandContainer />
      </>
    </MainLayout>
  );
};

export default HomeZustandContainer;
