import "./VideoExplorer.scss";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import GenericTitle from "../GenericTitle/GenericTitle";
import VideoInfo from "./VideoInfo/VideoInfo";
import TextBlock from "../TextBlock/TextBlock";
import CommentInput from "../CommentsInput/CommentInput";
import Counter from "../Counter/Counter";
import CommentsList from "../CommentsList/CommentsList";
import VideoList from "./VideoList/VideoList";

import { useState, useEffect } from "react";
import webapi from "../../webapi.js";
import axios from "axios";

export default function VideoExplorer() {
  let [selectedVideo, setSelectedVideo] = useState(null);
  let [videoListData, setVideoListData] = useState([]);
  let [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(webapi.URL + "/videos" + webapi.KEY);
      setVideoListData(response.data);
      setSelectedVideo(response.data[0].id);
      const response_video = await axios.get(webapi.URL + "/videos/" + response.data[0].id + webapi.KEY);
      setVideoData(response_video.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedVideo) {
        const response = await axios.get(webapi.URL + "/videos/" + selectedVideo + webapi.KEY);
        setVideoData(response.data);
      }
    };
    fetchData();
  }, [selectedVideo]);

  const videoClickHandler = (videoId) => {
    setSelectedVideo(videoId);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (videoData) {
    return (
      <div className="VideoExplorer">
        <div className="VideoExplorer__videoPlayer">
          <VideoPlayer image={videoData.image} />
        </div>
        <div className="VideoExplorer__cont">
          <div className="VideoExplorer__cont__meta">
            <div className="VideoExplorer__cont__meta__videoTitle">
              <GenericTitle title={videoData.title} />
            </div>
            <section className="VideoExplorer__cont__meta__videoInfo">
              <VideoInfo author={videoData.channel} views={videoData.views} videoDate={videoData.timestamp} likes={videoData.likes} />
            </section>
            <article className="VideoExplorer__cont__meta__textBlock">
              <TextBlock text={videoData.description} />
            </article>
            <section className="VideoExplorer__cont__meta__commentInput">
              <Counter title="Comments" counter={videoData.comments.length} />
              <CommentInput />
            </section>
            <section className="VideoExplorer__cont__meta__commentList">
              <CommentsList comments={videoData.comments} />
            </section>
          </div>
          <section className="VideoExplorer__cont__videoList">
            <VideoList list={videoListData} clickHandler={videoClickHandler} selected={selectedVideo} />
          </section>
        </div>
      </div>
    );
  } else return <p>Loading Data ... Please Wait.</p>;
}
