import Button from "../Button/Button";
import videoThumb from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate, Link } from "react-router-dom";
import { useState, useRef } from "react";
import "./UploadVideo.scss";

const initialValues = {
  videoTitle: "",
  videoDescription: "",
};

export default function UploadVideo() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const formRef = useRef();
  const formTitleRef = useRef();
  const formDescriptionRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Your video titled " + values.videoTitle + " is now uploading in the background.");
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "videoTitle") {
      if (value === "") formTitleRef.current.style.borderColor = "#D22D2D";
      else formTitleRef.current.style.borderColor = "#AFAFAF";
    }

    if (name === "videoDescription") {
      if (value === "") formDescriptionRef.current.style.borderColor = "#D22D2D";
      else formDescriptionRef.current.style.borderColor = "#AFAFAF";
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const isFormValid = () => {
    if (values.videoDescription === "" || values.videoTitle === "") {
      return false;
    } else return true;
  };

  return (
    <>
    <h1 className="font-PageHeader">
      Upload Video
    </h1>
      <hr className="UploadVideo__ruler" />
      <form className="UploadVideo" onSubmit={handleFormSubmit} ref={formRef}>
        <div className="UploadVideo__container">
          <label className="UploadVideo__container__title font-Faded font-Label">VIDEO THUMBNAIL</label>
          <img className="UploadVideo__container__preview" src={videoThumb} alt="video preview" />
        </div>
        <div className="UploadVideo__fieldgroup">
          <div className="UploadVideo__container">
            <label htmlFor="videoTitle" className="UploadVideo__container__title font-Faded font-Label">
              TITLE YOUR VIDEO
            </label>
            <input ref={formTitleRef} name="videoTitle" type="text" className="UploadVideo__container__field font-Body" placeholder="Add a title to your video" value={values.videoTitle} onChange={handleInputChange} />
          </div>
          <div className="UploadVideo__container">
            <label htmlFor="videoDescription" className="UploadVideo__container__title font-Faded font-Label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea ref={formDescriptionRef} name="videoDescription" className="UploadVideo__container__textbox font-Body" placeholder="Add a description to your video" value={values.videoDescription} onChange={handleInputChange} />
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
