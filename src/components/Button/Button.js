import "./Button.scss";
import iComment from "../../assets/Icons/add_comment.svg";
import iUpload from "../../assets/Icons/upload.svg";
import iPublish from "../../assets/Icons/publish.svg";

const icons = [iComment, iUpload, iPublish];

export default function Button(prop) {
  const { label, iconType, buttonType, disabled } = prop;

  if (iconType === undefined) {
    return (
      <button className="ButtonCancel" type="button" disabled={disabled}>
        <div className="ButtonCancel__icon">
          <div className="ButtonCancel__icon__image" />
        </div>
        <div className="ButtonCancel__label">
          <p className="font-Button font-Button--alt">{label}</p>
        </div>
      </button>
    );
  } else {
    return (
      <button className="Button" type={buttonType} disabled={disabled}>
        <div className="Button__icon" >
          <img className="Button__icon__image" alt="icon" src={icons[iconType]} />
        </div>
        <div className="Button__label">
          <p className="font-Button">{label}</p>
        </div>
      </button>
    );
  }
}
