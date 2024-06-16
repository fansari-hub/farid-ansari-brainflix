import './VideoPlayer.scss'

export default function VideoPlayer(props){
    const {image} = props;
    return (
        <video className="VideoPlayer" poster={image} controls></video>
    );
}