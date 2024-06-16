import "./CommentsList.scss";
import utils from "../utils.js";

import CommentCard from "./CommentCard";


export default function CommentsList(props) {
  return (
    <div className="CommentsList">
      <hr />
      {props.comments.map((i) => (
       <CommentCard name={i.name} comment={i.comment} timestamp={utils.getRelativeTime(i.timestamp)} key={i.id}/>
       //<CommentCard name={i.name} comment={i.comment} timestamp={Intl.DateTimeFormat("en-US", {weekday: "short", month: "short", day: "2-digit", year: "numeric", timeZone: "America/Los_Angeles",}).format(i.timestamp)} key={i.id}/>
       
      ))}
    </div>
  );
}
