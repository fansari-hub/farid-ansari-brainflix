import Avatar from "./Avatar";
import "./CommentCard.scss";

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
            <p className="CommentsCard__output__header__date font-Body font-Faded">{Intl.DateTimeFormat("en-US", { month: "2-digit", day: "2-digit", year: "numeric", timeZone: "America/Los_Angeles" }).format(timestamp)}</p>
            </div> 
            <p className="CommentsCard__output__comment font-Body">{comment}</p>
          </div>
        </div>
        <hr />
      </>

    );
}