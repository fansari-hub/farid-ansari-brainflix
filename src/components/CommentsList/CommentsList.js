import "./CommentsList.scss";
import utils from "../../utils/utils.js";

import CommentCard from "../CommentsCard/CommentCard.js";


export default function CommentsList(props) {

  const { comments } = props;
  
  const commentsReversed = [...comments]
  commentsReversed.reverse();

  return (
    <>
    <hr />
    <div className="CommentsList">
      {commentsReversed.map((i) => (
       <CommentCard name={i.name} comment={i.comment} timestamp={utils.getRelativeTime(i.timestamp)} key={i.id}/>
      ))}
    </div>
    </>
  );
}
