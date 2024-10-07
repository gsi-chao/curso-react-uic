import { useFormContext } from "react-hook-form";
import { NewPostDTO } from "../../types/post";
import "./new-post.css"; // Import the CSS file

const NewPost = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewPostDTO>();

  return (
    <div className="new-post-container">
      <img
        className="profile-img"
        src="https://pbs.twimg.com/profile_images/1816839754484191233/bgNmcibs_400x400.jpg" // replace with your profile image
        alt="Profile"
      />
      <div className="new-post-body">
        <div className="new-post-header">
          <select className="visibility-select" {...register("visibility")}>
            <option value="everyone">Everyone</option>
            <option value="followers">Followers</option>
            <option value="mentioned">Mentioned Only</option>
          </select>
          {errors["visibility"] ? (
            <span
              style={{
                color: "red",
              }}
            >
              {errors["visibility"].message}
            </span>
          ) : null}
        </div>

        <textarea
          className="new-post-input"
          placeholder="What is happening?!"
          {...register("content")}
        />
        {errors["content"] ? (
          <span
            style={{
              color: "red",
            }}
          >
            {errors["content"].message}
          </span>
        ) : null}

        <div className="reply-info">Everyone can reply</div>

        <div className="new-post-footer">
          <div className="post-icons">
            <i className="icon-img">🖼️</i>
            <i className="icon-gif">GIF</i>
            <i className="icon-poll">📊</i>
            <i className="icon-emoji">😊</i>
            <i className="icon-schedule">📅</i>
            <i className="icon-location">📍</i>
          </div>
          <button type="submit" className="post-btn active">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
