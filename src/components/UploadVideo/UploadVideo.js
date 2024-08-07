import Button from "../Button/Button";
import videoThumb from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate, Link } from "react-router-dom";
import { useState, useRef } from "react";
import "./UploadVideo.scss";
import webapi from "../../utils/webapi";
import axios from "axios";

const initialValues = {
  videoTitle: "",
  videoDescription: "",
  videoImageFile: "",
  videoImageURL: videoThumb,
};

export default function UploadVideo() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const formRef = useRef();
  const formTitleRef = useRef();
  const formDescriptionRef = useRef();
  const userName = localStorage.getItem("userName");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const postURL = webapi.URL + `/videos` + webapi.KEY;
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      if (values.videoImageFile === "") {
        await axios.post(postURL, { title: values.videoTitle, description: values.videoDescription, userName: userName });
      } else {
        await axios.post(postURL, { title: values.videoTitle, description: values.videoDescription, userName: userName, imageFile: values.videoImageFile }, config);
      }
      alert("Your video titled " + values.videoTitle + " is now uploading in the background.");
      navigate("/");
    } catch (error) {
      alert(`UploadVideo.handleFormSubmit() request failed with error: ${error}`);
    }
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

  const handleImgChange = (event) => {
    setValues({
      ...values,
      videoImageFile: event.target.files[0],
      videoImageURL: URL.createObjectURL(event.target.files[0]),
    });
  };

  const isFormValid = () => {
    if (values.videoDescription === "" || values.videoTitle === "") {
      return false;
    } else return true;
  };

  return (
    <>
      <h1 className="UploadVideo__title font-PageHeader">Upload Video</h1>
      <hr className="UploadVideo__ruler" />
      <form className="UploadVideo" onSubmit={handleFormSubmit} encType={"multipart/form-data"} ref={formRef}>
        <div className="UploadVideo__container">
          <label className="UploadVideo__container__title font-Faded font-Label">VIDEO THUMBNAIL</label>
          <img className="UploadVideo__container__preview" src={values.videoImageURL} alt="video preview" />
          <div className="UploadVideo__container__imgButton">
            <input type="file" name="videoImg" accept="image/*" onChange={handleImgChange} />
          </div>
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
