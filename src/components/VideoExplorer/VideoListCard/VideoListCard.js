import "./VideoListCard.scss"
import { Link } from "react-router-dom";

export default function VideoListCard(props){
    const {videoItem} = props;
    const clickDestination = "/video/" + videoItem.id;
    return (
        <Link to={clickDestination}>
        <div className="VideoListCard">
            <div>
                <img className="VideoListCard__thumb" src={videoItem.image} alt="video thumbnail"/>
            </div>
            <div className="VideoListCard__details">
                <p className="VideoListCard__details__text font-WidgetTitle">{videoItem.title}</p>
                <p className="VideoListCard__details__text font-Body">{videoItem.channel}</p>
            </div>
        </div>
        </Link>
    );
}