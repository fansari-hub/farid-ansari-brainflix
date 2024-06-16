import Avatar from "./Avatar";
import Button from "./Button";
import "./CommentsInput.scss"

export default function CommentInput(){
    return(
        <div className="CommentsInput">
            <div className="CommentsInput__avatar">
                <Avatar/>
            </div>
            <div className="CommentsInput__input">
                <p className="CommentsInput__input__title font-Faded font-Label">JOIN THE CONVERSATION!</p>
                <textarea className="CommentsInput__input__textbox">Add a new comment</textarea>
                <div className="CommentsInput__input__button">
                    <Button label="COMMENT" iconType={0}/>
                </div>
                
            </div>
        </div>
    );
}