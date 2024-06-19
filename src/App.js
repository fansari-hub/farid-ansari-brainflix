import "./App.scss";

import Navigation from "./components/Navigation";
import VideoExplorer from "./components/VideoExplorer";

function App() {
  return (
    <div className="App">
      <nav className="App__navigation">
        <Navigation />
      </nav>
      <main className="App__mainContent">
        <VideoExplorer />
      </main>
    </div>
  );
}

export default App;
