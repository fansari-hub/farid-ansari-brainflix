import "./App.scss";

import Navigation from "./components/Navigation";
import VideoExplorer from "./components/VideoExplorer";
import VideoList from "./components/VideoList";
import videoList from "./data/videos.json"
import {useState}  from "react";


function App() {
let [selectedVideo, setSelectedVideo] = useState(0)

const videoClickHandler = (videoId) =>{
  console.log(videoId);
  let x = videoList.findIndex((obj) => {return obj.id === videoId})
  setSelectedVideo(x)
  window.scrollTo({top:0, left:0, behavior:"smooth"});
}


  return (
    <div className="App">
      <div>
        <Navigation/>
      </div>
      <div>
        <VideoExplorer index={selectedVideo}/>
      </div>
      <div>
        <VideoList list={videoList} clickHandler={videoClickHandler} selected={selectedVideo}/>
      </div>
    </div>
  );
}

export default App;
