import avatar from '../assets/Images/Mohan-muruge.jpg'
import './Avatar.scss'

export default function SiteLogo(){
    return(
        <div className="Avatar">
            <img className="Avatar__img" src={avatar} alt='Avatar'/>
        </div>
        
    );
}