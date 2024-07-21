import Avatar from "../Avatar/Avatar";
import "./CommentCard.scss";
import webapi from "../../utils/webapi.js";
import axios from "axios";
import iDelete from "../../assets/Icons/icon-delete.svg";

export default function CommentCard(prop) {
  const { name, timestamp, comment, callback, commentId, videoId } = prop;
  const userName = localStorage.getItem("userName");

  const handleDeleteComment = async (event) => {
    event.preventDefault();
    const delURL = webapi.URL + `/videos/${videoId}/comments/${commentId}` + webapi.KEY;
    const response = await axios.delete(delURL);
    
    if (response.status === 200) {
      callback();
    } else alert("Oops, something went wrong! Comment not posted.");
  };

  return (
    <>
      <div className="CommentsCard">
        <div className="CommentsCard__avatar">
          <Avatar />
        </div>
        <div className="CommentsCard__output">
          <div className="CommentsCard__output__header">
            <p className="CommentsCard__output__header__name font-WidgetTitle">{name}</p>
            <p className="CommentsCard__output__header__date font-Body font-Faded">{timestamp}</p>
          </div>
          <p className="CommentsCard__output__comment font-Body">{comment}</p>
        </div>
        <div className="CommentsCard__output__iDelete">
          <img className="Button__icon__image" alt="icon" src={iDelete} hidden={!(name === userName)} onClick={handleDeleteComment} />
        </div>
      </div>
      <hr />
    </>
  );
}
