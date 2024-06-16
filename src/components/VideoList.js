import "./VideoList.scss";
import VideoListCard from "./VideoListCard";

export default function VideoList({ list }) {
  return (
    <div>
      <div className="VideoList">
        <p className="font-Body font-Faded">NEXT VIDEOS</p>
      </div>
      <div>
        {list.map((i) => (
          <VideoListCard videoItem={i}/>
        ))}
      </div>
    </div>
  );
}
