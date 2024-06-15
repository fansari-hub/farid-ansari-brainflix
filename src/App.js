import "./App.scss";
import SearchBox from "./components/SearchBox";
import SiteLogo from "./components/SiteLogo";
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import VideoPlayer from "./components/VideoPlayer";
import VideoTitle from "./components/VideoTitle";
import VideoInfo from "./components/VideoInfo";
import TextBlock from "./components/TextBlock";
import CommentInput from "./components/CommentInput";
import CommentCounter from "./components/CommentCounter";


function App() {
  return (
    <div className="App">
      <SiteLogo/>
      <div>
        <SearchBox/>
        <Avatar/> 
      </div>
      <div>
        <Button label="UPLOAD"/>
      </div>
      <div>
        <VideoPlayer/>
      </div>
      <div>
        <VideoTitle title="The Future of Artificial Intelligence"/>
      </div>
      <div>
        <VideoInfo author="Aiden Thompson" views={980544} videoDate="8/8/2023" likes={22479}/>
      </div>
      <div>
        <TextBlock text="BLABLABLABLABLA"/>
      </div>
      <div>
        <CommentCounter counter={3}/>
        <CommentInput/>
      </div>
    </div>
  );
}

export default App;
