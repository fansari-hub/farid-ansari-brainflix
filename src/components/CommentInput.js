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
                <p className="CommentsInput__right__container__title font-Faded font-Label">JOIN THE CONVERSATION!</p>
                <input className="CommentsInput__right__container__textbox" type="text" placeholder="Add a new Comment!"/>
            </div>
            <div className="CommentsInput__right__button">
                <Button label="COMMENT" iconType={0} />
            </div>
      </div>
    </div>
  );
}
