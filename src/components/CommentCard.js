import Avatar from "./Avatar";
import "./CommentCard.scss";
import utils from "../utils.js";

export default function CommentCard(prop){
    const {name, timestamp, comment} = prop
    return (
        <>
        <div className="CommentsCard">
          <div className="CommentsCard__avatar">
            <Avatar />
          </div>
          <div className="CommentsCard__output">
            <div className="CommentsCard__output__header">
            <p className="CommentsCard__output__header__name font-Label">{name}</p>
            <p className="CommentsCard__output__header__date font-Body font-Faded">{utils.getRelativeTime(timestamp)}</p>
            </div> 
            <p className="CommentsCard__output__comment font-Body">{comment}</p>
          </div>
        </div>
        <hr />
      </>

    );
}