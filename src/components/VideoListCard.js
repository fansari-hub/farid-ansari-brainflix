import "./VideoListCard.scss"

export default function(props){
    const {videoItem, clickHandler} = props
    return (
        <div className="VideoListCard" onClick={() => clickHandler(videoItem.id)}>
            <div>
                <img className="VideoListCard__thumb" src={videoItem.image}/>
            </div>
            <div className="VideoListCard__details">
                <p className="VideoListCard__details__text font-Label">{videoItem.title}</p>
                <p className="VideoListCard__details__text font-Body">{videoItem.channel}</p>
            </div>
        </div>
    );
}