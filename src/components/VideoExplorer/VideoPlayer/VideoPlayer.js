import './VideoPlayer.scss'
import { useEffect, useRef } from 'react';

export default function VideoPlayer(props){
    const {image, videoURL} = props;
    const videoRef = useRef(videoURL);

    // This effect is needed to stop the current video from playing when user select a new video
  useEffect(() => {
    videoRef.current.load();
  },[image, videoURL])


  // This effect refreshes the number of likes and reset the likes icon 
  // when the parent component changes selected video.

    return (
        <div className="VideoPlayer">
            <video ref={videoRef} className="VideoPlayer__player" poster={image} controls>
                <source src={videoURL} type="video/mp4"/>
            </video>
        </div>
    );
}