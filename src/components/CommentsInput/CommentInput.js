import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./CommentsInput.scss";
import { useRef, useState } from "react";
import webapi from "../../utils/webapi";
import axios from "axios";

export default function CommentInput({ videoId, callback }) {
  let formCommentInput = useRef();
  const [commentText, setCommentText] = useState("");
  const userName = localStorage.getItem("userName");

  const handleInputChange = (event) => {
    const commentValue = event.target.value;
    if (commentValue !== "") {
      formCommentInput.current.style.borderColor = "#AFAFAF";
    }
    setCommentText(commentValue);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (commentText === "") {
      formCommentInput.current.style.borderColor = "#D22D2D";
      formCommentInput.current.focus();
      return;
    } else {
      try {
        const postURL = webapi.URL + `/videos/${videoId}/comments` + webapi.KEY;
        await axios.post(postURL, { name: userName, comment: commentText });
        setCommentText("");
        callback();
      } catch (error) {
        alert(`CommentInput.handleFormSubmit() request failed with error: ${error}`);
      }
    }
  };

  return (
    <div className="CommentsInput">
      <div className="CommentsInput__avatar">
        <Avatar useDefault={true} />
      </div>
      <form className="CommentsInput__right" onSubmit={handleFormSubmit}>
        <div className="CommentsInput__right__container">
          <label className="CommentsInput__right__container__title font-Faded font-Label">JOIN THE CONVERSATION</label>
          <textarea ref={formCommentInput} value={commentText} onChange={handleInputChange} className="CommentsInput__right__container__textbox font-Body" placeholder="Add a new comment" />
        </div>
        <div className="CommentsInput__right__button">
          <Button label="COMMENT" iconType={0} />
        </div>
      </form>
    </div>
  );
}
