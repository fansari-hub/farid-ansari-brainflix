import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./CommentsInput.scss";
import { useRef, useState } from "react";


export default function CommentInput() {
  let formCommentInput = useRef();
  const [commentText, setCommentText] = useState("");

  const handleInputChange = (event) => {
    const commentValue = event.target.value;
    if (commentValue === "") {
        formCommentInput.current.style.borderColor = "#D22D2D";
    } else{
      formCommentInput.current.style.borderColor = "#AFAFAF";
    }
    setCommentText(commentValue);
  };

  return (
    <div className="CommentsInput">
      <div className="CommentsInput__avatar">
        <Avatar useDefault={true}/>
      </div>
      <div className="CommentsInput__right">
            <div className="CommentsInput__right__container">
                <label className="CommentsInput__right__container__title font-Faded font-Label">JOIN THE CONVERSATION</label>
                <textarea ref={formCommentInput} value={commentText} onChange={handleInputChange}className="CommentsInput__right__container__textbox font-Body" placeholder="Add a new comment"/>
            </div>
            <div className="CommentsInput__right__button">
                <Button label="COMMENT" iconType={0} />
            </div>
      </div>
    </div>
  );
}
