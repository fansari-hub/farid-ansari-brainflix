import Avatar from "./Avatar";
import Button from "./Button";

export default function CommentInput(){
    return(
        <>
        <div>
            <div>
                <Avatar/>
            </div>
            <div>
                <div>Join The Converstation</div>
                <div><textarea>Add a new comment!</textarea></div>
                <div><Button label="COMMENT"/></div>
            </div>
        </div>
        </>
    );
}