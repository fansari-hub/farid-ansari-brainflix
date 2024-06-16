import "./App.scss";

import Navigation from "./components/Navigation";
import VideoExplorer from "./components/VideoExplorer";
import VideoList from "./components/VideoList";
import videoList from "./data/videos.json"


function App() {

const videoClickHandler = (videoId) =>{
  console.log(videoId);
}

  return (
    <div className="App">
      <div>
        <Navigation/>
      </div>
      <div>
        <VideoExplorer index={0}/>
      </div>
      <div>
        <VideoList list={videoList} clickHandler={videoClickHandler}/>
      </div>
    </div>
  );
}

export default App;
