import "./CommentsOutput.scss";
import Avatar from "./Avatar";

export default function CommentsOutput(props) {
  return (
    <div className="CommentsOutput">
      <hr />
      {props.comments.map((i) => (
        <>
          <div className="CommentsOutput__data">
            <div className="CommentsOutput__data__avatar">
              <Avatar />
            </div>
            <div className="CommentsOutput__data__output">
              <p className="CommentsOutput__data__output__name font-Label">{i.name}</p>
              <p className="CommentsOutput__data__output__comment font-Body">{i.comment}</p>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}
