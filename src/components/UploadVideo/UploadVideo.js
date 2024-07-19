import Button from "../Button/Button";
import videoThumb from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./UploadVideo.scss";

const initialValues = {
  videoTitle: "",
  videoDescription: "",
};

export default function UploadVideo() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Your video titled " + values.videoTitle + " is now uploading in the background.");
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const isFormValid = () => {
    if (values.videoTitle === "" || values.videoDescription === "") {
      return false;
    } else return true;
  };

  return (
    <>
      <hr className="UploadVideo__ruler" />
      <form className="UploadVideo" onSubmit={handleFormSubmit}>
        <div className="UploadVideo__container">
          <label className="UploadVideo__container__title font-Faded font-Label">VIDEO THUMBNAIL</label>
          <img className="UploadVideo__container__preview" src={videoThumb} alt="video preview" />
        </div>
        <div className="UploadVideo__fieldgroup">
          <div className="UploadVideo__container">
            <label htmlFor="videoTitle" className="UploadVideo__container__title font-Faded font-Label">
              TITLE YOUR VIDEO
            </label>
            <input name="videoTitle" type="text" className="UploadVideo__container__field font-Body" placeholder="Add a title to your video" value={values.videoTitle} onChange={handleInputChange} />
          </div>
          <div className="UploadVideo__container">
            <label htmlFor="videoDescription" className="UploadVideo__container__title font-Faded font-Label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea name="videoDescription" className="UploadVideo__container__textbox font-Body" placeholder="Add a description to your video" value={values.videoDescription} onChange={handleInputChange} />
          </div>
        </div>

        <div className="UploadVideo__ruler">
          <hr />
        </div>
        <div className="UploadVideo__buttonsContainer">
          <div className="UploadVideo__buttonsContainer__button">
            <Button label="PUBLISH" iconType={2} buttonType="submit" disabled={!isFormValid()} />
          </div>
          <div className="UploadVideo__buttonsContainer__cancelbutton">
            <></>
            <Link to="/">
              <Button label="CANCEL" />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
