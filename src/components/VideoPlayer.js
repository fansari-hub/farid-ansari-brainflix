import './VideoPlayer.scss'

export default function VideoPlayer(props){
    const {image} = props;
    return (
    <img className="VideoPlayer" src={image} alt='Video Player'/>
    );
}