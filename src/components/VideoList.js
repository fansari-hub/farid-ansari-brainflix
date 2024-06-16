import "./VideoList.scss";
import VideoListCard from "./VideoListCard";

export default function VideoList({ list, clickHandler }) {
  return (
    <div>
      <div className="VideoList">
        <p className="font-Body font-Faded">NEXT VIDEOS</p>
      </div>
      <div>
        {list.map((i) => (
          <VideoListCard videoItem={i} clickHandler={clickHandler} key={i.id}/>
        ))}
      </div>
    </div>
  );
}
