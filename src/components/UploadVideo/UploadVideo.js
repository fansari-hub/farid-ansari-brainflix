import Button from "../Button/Button";
import videoThumb from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadVideo.scss";

export default function UploadVideo() {
  return (
    <>
      <hr className="UploadVideo__ruler" />
      <div className="UploadVideo">
        <div className="UploadVideo__container">
          <label className="UploadVideo__container__title font-Faded font-Label">VIDEO THUMBNAIL</label>
          <img className="UploadVideo__container__preview" src={videoThumb} alt="video preview" />
        </div>
        <div className="UploadVideo__fieldgroup">
          <div className="UploadVideo__container">
            <label className="UploadVideo__container__title font-Faded font-Label">TITLE YOUR VIDEO</label>
            <input type="text" className="UploadVideo__container__field font-Body" placeholder="Add a title to your video" />
          </div>
          <div className="UploadVideo__container">
            <label className="UploadVideo__container__title font-Faded font-Label">ADD A VIDEO DESCRIPTION</label>
            <textarea className="UploadVideo__container__textbox font-Body" placeholder="Add a description to your video" />
          </div>
        </div>

        <div className="UploadVideo__ruler">
          <hr />
        </div>
        <div className="UploadVideo__buttonsContainer">
          <div className="UploadVideo__buttonsContainer__button">
            <Button label="PUBLISH" iconType={2} />
          </div>
          <div className="UploadVideo__buttonsContainer__cancelbutton">
            <Button label="CANCEL" />
          </div>
        </div>
      </div>
    </>
  );
}
