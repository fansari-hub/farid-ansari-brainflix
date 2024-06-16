import "./VideoListCard.scss"

export default function({videoItem}){
    return (
        <div className="VideoListCard">
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