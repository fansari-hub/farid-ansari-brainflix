import "./Button.scss"
import iComment from "../../assets/Icons/add_comment.svg";
import iUpload from "../../assets/Icons/upload.svg"

const icons = [iComment, iUpload]

export default function Button(prop){

    const {label, iconType} = prop;
    return (
        <button className="Button">
            <div className="Button__icon"><img className="Button__icon__image" alt="icon" src={icons[iconType]}/></div>
            <div className="Button__label"><p className="font-Button">{label}</p></div>
            
        </button>
    );
}