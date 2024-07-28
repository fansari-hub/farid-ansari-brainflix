import "./VideoExplorer.scss";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoInfo from "./VideoInfo/VideoInfo";
import TextBlock from "../TextBlock/TextBlock";
import CommentInput from "../CommentsInput/CommentInput";
import Counter from "../Counter/Counter";
import CommentsList from "../CommentsList/CommentsList";
import VideoList from "./VideoList/VideoList";

import { useState, useEffect } from "react";
import webapi from "../../utils/webapi.js";
import axios from "axios";

export default function VideoExplorer({ videoId }) {
  let [selectedVideo, setSelectedVideo] = useState(null);
  let [videoListData, setVideoListData] = useState([]);
  let [videoData, setVideoData] = useState(null);

  const refetchData = async () => {
    try {
      const getURL = webapi.URL + "/videos/" + videoData.id + webapi.KEY;
      const response_video = await axios.get(getURL);
      setVideoData(response_video.data);
    } catch (error) {
      alert(`VideoExplorer.refetchData() request failed with error: ${error}`);
      return -1;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        const getURL = webapi.URL + "/videos" + webapi.KEY;
        response = await axios.get(getURL);
        setVideoListData(response.data);
      } catch (error) {
        alert(`VideoExplorer.useEffect().fetchData() request failed with error: ${error}`);
        return -1;
      }

      if (videoId === undefined) {
        setSelectedVideo(response.data[0].id);
        const getURL = webapi.URL + "/videos/" + response.data[0].id + webapi.KEY;
        const response_video = await axios.get(getURL);
        setVideoData(response_video.data);
      } else {
        const getURL = webapi.URL + "/videos/" + videoId + webapi.KEY;
        const response_video = await axios.get(getURL);
        setVideoData(response_video.data);
      }
    };

    fetchData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [videoId]);

  if (videoData) {
    return (
      <div className="VideoExplorer">
        <div className="VideoExplorer__videoPlayer">
          <VideoPlayer image={videoData.image} />
        </div>
        <div className="VideoExplorer__cont">
          <div className="VideoExplorer__cont__meta">
            <div className="VideoExplorer__cont__meta__videoTitle">
              <h1 className="font-PageHeader">{videoData.title}</h1>
            </div>
            <section className="VideoExplorer__cont__meta__videoInfo">
              <VideoInfo author={videoData.channel} views={videoData.views} videoDate={videoData.timestamp} likes={videoData.likes} videoId={videoData.id} />
            </section>
            <article className="VideoExplorer__cont__meta__textBlock">
              <TextBlock text={videoData.description} />
            </article>
            <section className="VideoExplorer__cont__meta__commentInput">
              <Counter title="Comments" counter={videoData.comments.length} />
              <CommentInput videoId={videoData.id} callback={refetchData} />
            </section>
            <section className="VideoExplorer__cont__meta__commentList">
              <CommentsList comments={videoData.comments} callback={refetchData} videoId={videoData.id} />
            </section>
          </div>
          <section className="VideoExplorer__cont__videoList">
            <VideoList list={videoListData} selected={selectedVideo} />
          </section>
        </div>
      </div>
    );
  } else return <p>Loading Data ... Please Wait.</p>;
}
