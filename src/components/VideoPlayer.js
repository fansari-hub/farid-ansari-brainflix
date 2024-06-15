import currentVideo from "../assets/Images/Upload-video-preview.jpg"
import './VideoPlayer.scss'

export default function VideoPlayer(){
    return (
    <img className="VideoPlayer" src={currentVideo} alt='Video Player'/>
    );
}