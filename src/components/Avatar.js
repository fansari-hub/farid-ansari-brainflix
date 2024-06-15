import avatar from '../assets/Images/Mohan-muruge.jpg'
import './Avatar.scss'

export default function SiteLogo(){
    return(
        <img className="Avatar" src={avatar} alt='Avatar'/>
    );
}