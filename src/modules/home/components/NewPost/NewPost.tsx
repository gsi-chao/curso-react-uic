import { useState } from "react";
import "./new-post.css"; // Import the CSS file

const NewPost = () => {
  const [post, setPost] = useState("");

  return (
    <div className="new-post-container">
      <img
        className="profile-img"
        src="https://pbs.twimg.com/profile_images/1816839754484191233/bgNmcibs_400x400.jpg" // replace with your profile image
        alt="Profile"
      />
      <div className="new-post-body">
        <div className="new-post-header">
          <select className="visibility-select">
            <option value="everyone">Everyone</option>
            <option value="followers">Followers</option>
            <option value="mentioned">Mentioned Only</option>
          </select>
        </div>

        <textarea
          className="new-post-input"
          placeholder="What is happening?!"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

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
          <button className={`post-btn ${post ? "active" : ""}`}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
