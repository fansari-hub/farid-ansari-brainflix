import "./App.scss";

import Navigation from "./components/Navigation";
import VideoPlayer from "./components/VideoPlayer";
import VideoTitle from "./components/VideoTitle";
import VideoInfo from "./components/VideoInfo";
import TextBlock from "./components/TextBlock";
import CommentInput from "./components/CommentInput";
import CommentCounter from "./components/CommentCounter";


function App() {
  return (
    <div className="App">
      <Navigation/>
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
        <TextBlock text="Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier."/>
      </div>
      <div>
        <CommentCounter counter={3}/>
        <CommentInput/>
      </div>
    </div>
  );
}

export default App;
