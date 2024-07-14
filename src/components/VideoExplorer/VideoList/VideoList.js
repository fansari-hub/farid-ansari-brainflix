import "./VideoList.scss";
import VideoListCard from "../VideoListCard/VideoListCard";

export default function VideoList({ list, selected }) {
  return (
    
      <div className="VideoList">
        <p className="font-Label font-Faded">NEXT VIDEOS</p>
      <div>
        {list
          .filter((e, i) => i !== selected)
          .map((i) => (
            <VideoListCard videoItem={i} key={i.id} />
          ))}
      </div>
      </div>
  );
}
