import VideoPlayer from "./VideoPlayer/VideoPlayer";
import GenericTitle from "../GenericTitle/GenericTitle";
import VideoInfo from "./VideoInfo/VideoInfo";
import TextBlock from "../TextBlock/TextBlock";
import CommentInput from "../CommentsInput/CommentInput";
import Counter from "../Counter/Counter";
import CommentsList from "../CommentsList/CommentsList";
import videoData from "../../data/video-details.json";
import VideoList from "./VideoList/VideoList";
import videoListData from "../../data/videos.json";
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
            <GenericTitle title={videoData[selectedVideo].title} />
          </div>
          <section className="VideoExplorer__cont__meta__videoInfo">
            <VideoInfo author={videoData[selectedVideo].channel} views={videoData[selectedVideo].views} videoDate={videoData[selectedVideo].timestamp} likes={videoData[selectedVideo].likes} />
          </section>
          <article className="VideoExplorer__cont__meta__textBlock">
            <TextBlock text={videoData[selectedVideo].description} />
          </article>
          <section className="VideoExplorer__cont__meta__commentInput">
            <Counter title="Comments" counter={videoData[selectedVideo].comments.length} />
            <CommentInput />
          </section>
          <section className="VideoExplorer__cont__meta__commentList">
            <CommentsList comments={videoData[selectedVideo].comments} />
          </section>
        </div>
        <section className="VideoExplorer__cont__videoList">
          <VideoList list={videoListData} clickHandler={videoClickHandler} selected={selectedVideo} />
        </section>
      </div>
    </div>
  );
}
