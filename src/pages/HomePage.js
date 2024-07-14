import "./HomePage.scss";
import { useParams } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import VideoExplorer from "../components/VideoExplorer/VideoExplorer";



export default function HomePage() {
  const params = useParams();
  return (
    <div className="HomePage">
      <nav className="HomePage__navigation">
        <Navigation />
      </nav>
      <main className="HomePage__mainContent">
        <VideoExplorer videoId={params.videoId}/>
      </main>
    </div>
  );
}