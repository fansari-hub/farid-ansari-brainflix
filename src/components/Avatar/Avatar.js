import avatar from '../../assets/Images/Mohan-muruge.jpg'
import './Avatar.scss'

export default function Avatar({image, useDefault}){

    return(
        <div className="Avatar">
            {image && <img className="Avatar__img" src={image} alt='Avatar'/>}
            {!image && useDefault && <img className="Avatar__img" src={avatar} alt='Avatar'/>}
        </div> 
    );
}