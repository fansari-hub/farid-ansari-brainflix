import Button from "../Button/Button";
import videoThumb from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadVideo.scss";

export default function UploadVideo() {
  return (
    <div className="UploadVideo">

            <div className="UploadVideo__container">
                <label className="UploadVideo__container__title font-Faded font-Label">VIDEO THUMBNAIL</label>
                <img className="UploadVideo__container__preview" src={videoThumb} alt="video preview"/>
            </div>
            <div className="UploadVideo__container">
                <label className="UploadVideo__container__title font-Faded font-Label">TITLE YOUR VIDEO</label>
                <input type="text" className="UploadVideo__container__field font-Body" placeholder="Add a title to your video"/>
            </div>
            <div className="UploadVideo__container">
                <label className="UploadVideo__container__title font-Faded font-Label">ADD A VIDEO DESCRIPTION</label>
                <textarea className="UploadVideo__container__textbox font-Body" placeholder="Add a description to your video"/>
            </div>
            <div className="UploadVideo__button">
                <Button label="PUBLISH" iconType={2} />
            </div>
            <div className="UploadVideo__cancelbutton">
                <Button label="CANCEL" />
            </div>
      </div>
  );
}
