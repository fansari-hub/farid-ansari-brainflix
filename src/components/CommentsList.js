import "./CommentsList.scss";

import CommentCard from "./CommentCard";

export default function CommentsList(props) {
  return (
    <div className="CommentsList">
      <hr />
      {props.comments.map((i) => (
       <CommentCard name={i.name} comment={i.comment}/>
      ))}
    </div>
  );
}
