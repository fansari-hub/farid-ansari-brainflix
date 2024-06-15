import Avatar from "./Avatar";
import "./CommentCard.scss";

export default function CommentCard(prop){
    const {name, comment} = prop
    return (
        <>
        <div className="CommentsCard">
          <div className="CommentsCard__avatar">
            <Avatar />
          </div>
          <div className="CommentsCard__output">
            <p className="CommentsCard__output__name font-Label">{name}</p>
            <p className="CommentsCard__output__comment font-Body">{comment}</p>
          </div>
        </div>
        <hr />
      </>

    );
}