import "./App.scss";

import Navigation from "./components/Navigation";
import VideoExplorer from "./components/VideoExplorer";

function App() {
  return (
    <div className="App">
      <div className="App__navigation">
        <Navigation />
      </div>
      <div className="App__mainContent">
        <VideoExplorer />
      </div>
    </div>
  );
}

export default App;
