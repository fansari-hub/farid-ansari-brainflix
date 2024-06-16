import "./VideoList.scss";
import VideoListCard from "./VideoListCard";

export default function VideoList({ list, clickHandler, selected }) {
  return (
    <div>
      <div className="VideoList">
        <p className="font-Body font-Faded">NEXT VIDEOS</p>
      </div>
      <div>
        {list
          .filter((e, i) => i !== selected)
          .map((i) => (
            <VideoListCard videoItem={i} clickHandler={clickHandler} key={i.id} />
          ))}
      </div>
    </div>
  );
}
