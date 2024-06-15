import "./App.scss";

import Navigation from "./components/Navigation";
import VideoExplorer from "./components/VideoExplorer";


function App() {
  return (
    <div className="App">
      <div>
        <Navigation/>
      </div>
      <div>
        <VideoExplorer index={0}/>
      </div>
    </div>
  );
}

export default App;
