import VideoPlayer from "./VideoPlayer"
import VideoTitle from "./VideoTitle"
import VideoInfo from "./VideoInfo"
import TextBlock from "./TextBlock"
import CommentInput from "./CommentInput";
import CommentCounter from "./CommentCounter";
import CommentsOutput from "./CommentsOutput";
import videoData from "../data/video-details.json";



export default function VideoExplorer(props) {
    const {index} = props
  return (
    <>
      <div>
        <VideoPlayer image={videoData[index].image}/>
      </div>
      <div>
        <VideoTitle title={videoData[index].title} />
      </div>
      <div>
        <VideoInfo author={videoData[index].channel} views={videoData[index].views} videoDate={videoData[index].timestamp} likes={videoData[index].likes} />
      </div>
      <div>
        <TextBlock text={videoData[index].description} />
      </div>
      <div>
        <CommentCounter counter={videoData[index].comments.length}/>
        <CommentInput/>
      </div>
      <div>
        <CommentsOutput comments={videoData[index].comments}/>
      </div>
    </>
  );
}
