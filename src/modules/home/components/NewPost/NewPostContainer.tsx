import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useHomeContext } from "../../store/home";
import { NewPostDTO, Post } from "../../types/post";
import NewPost from "./NewPost";
import { PostSchema } from "./shema";

const NewPostContainer = () => {
  const { dispatch } = useHomeContext();
  const form = useForm<NewPostDTO>({ resolver: zodResolver(PostSchema) });

  const onSubmit = (data: NewPostDTO) => {
    const newPost: Post = {
      user: {
        name: "John Doe",
        username: "johndoe",
        avatar:
          "https://pbs.twimg.com/profile_images/1816839754484191233/bgNmcibs_400x400.jpg",
        verified: true,
      },
      content: data.content,
      likes: 0,
      retweets: 0,
      comments: 0,
      stats: 0,
      postDate: new Date().toISOString(),
    };
    dispatch({ type: "ADD_POST", payload: newPost });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} id="new-post-form">
        <NewPost />
      </form>
    </FormProvider>
  );
};

export default NewPostContainer;
