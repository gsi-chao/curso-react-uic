import { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      {title}
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default NewPost;
