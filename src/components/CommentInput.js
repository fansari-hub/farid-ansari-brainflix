import Avatar from "./Avatar";
import Button from "./Button";
import "./CommentsInput.scss";

export default function CommentInput() {
  return (
    <div className="CommentsInput">
      <div className="CommentsInput__avatar">
        <Avatar />
      </div>
      <div className="CommentsInput__right">
            <div className="CommentsInput__right__container">
                <label className="CommentsInput__right__container__title font-Faded font-Label">JOIN THE CONVERSATION</label>
                <textarea className="CommentsInput__right__container__textbox" placeholder="Add a new comment!"/>
            </div>
            <div className="CommentsInput__right__button">
                <Button label="COMMENT" iconType={0} />
            </div>
      </div>
    </div>
  );
}
