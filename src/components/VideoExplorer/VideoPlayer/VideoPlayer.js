import './VideoPlayer.scss'

export default function VideoPlayer(props){
    const {image} = props;
    return (
        <div className="VideoPlayer">
            <video className="VideoPlayer__player" poster={image} controls></video>
        </div>
    );
}