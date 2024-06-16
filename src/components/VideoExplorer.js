import VideoPlayer from "./VideoPlayer";
import VideoTitle from "./VideoTitle";
import VideoInfo from "./VideoInfo";
import TextBlock from "./TextBlock";
import CommentInput from "./CommentInput";
import CommentCounter from "./CommentCounter";
import CommentsList from "./CommentsList";
import videoData from "../data/video-details.json";
import VideoList from "./VideoList";
import videoListData from "../data/videos.json";
import { useState } from "react";
import "./VideoExplorer.scss";

export default function VideoExplorer() {
  let [selectedVideo, setSelectedVideo] = useState(0);

  const videoClickHandler = (videoId) => {
    //console.log(videoId);
    let x = videoListData.findIndex((obj) => {
      return obj.id === videoId;
    });
    setSelectedVideo(x);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="VideoExplorer">
      <div className="VideoExplorer__videoPlayer">
        <VideoPlayer image={videoData[selectedVideo].image} />
      </div>
      <div className="VideoExplorer__cont">
        <div className="VideoExplorer__cont__meta">
          <div className="VideoExplorer__cont__meta__videoTitle">
            <VideoTitle title={videoData[selectedVideo].title} />
          </div>
          <div className="VideoExplorer__cont__meta__videoInfo">
            <VideoInfo author={videoData[selectedVideo].channel} views={videoData[selectedVideo].views} videoDate={videoData[selectedVideo].timestamp} likes={videoData[selectedVideo].likes} />
          </div>
          <div className="VideoExplorer__cont__meta__textBlock">
            <TextBlock text={videoData[selectedVideo].description} />
          </div>
          <div className="VideoExplorer__cont__meta__commentInput">
            <CommentCounter counter={videoData[selectedVideo].comments.length} />
            <CommentInput />
          </div>
          <div className="VideoExplorer__cont__meta__commentList">
            <CommentsList comments={videoData[selectedVideo].comments} />
          </div>
        </div>
        <div className="VideoExplorer__cont__videoList">
          <VideoList list={videoListData} clickHandler={videoClickHandler} selected={selectedVideo} />
        </div>
      </div>
    </div>
  );
}
