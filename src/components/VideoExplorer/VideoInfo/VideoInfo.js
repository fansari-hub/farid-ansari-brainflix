import "./VideoInfo.scss";
import utils from "../../../utils/utils.js";
import iLikes from "../../../assets/Icons/likes.svg";
import iLikesActive from "../../../assets/Icons/likes-active.svg";
import iViews from "../../../assets/Icons/views.svg";
import webapi from "../../../utils/webapi";
import axios from "axios";
import { useEffect, useState } from "react";


export default function VideoInfo({ author, videoDate, views, likes, videoId }) {
  const [liked, setLiked] = useState(false);
  const [currentlikeIcon, setcurrentlikeIcon] = useState(iLikes);
  const [newLikes, setNewLikes] = useState();
  

  const handleLikedClick = async (event) => {
    if (liked){
      return;
    }
    try {
      const postURL = webapi.URL + `/videos/${videoId}/likes` + webapi.KEY;
      await axios.put(postURL);
      setLiked(true);
      setNewLikes(likes + 1);
      setcurrentlikeIcon(iLikesActive);
    } catch (error) {
      alert(`UploadVideo.handleFormSubmit() request failed with error: ${error}`);
    }
  }

  // This effect refreshes the number of likes and reset the likes icon 
  // when the parent component changes selected video.
  useEffect(() => {
    setNewLikes(likes);
    setcurrentlikeIcon(iLikes);
    setLiked(false);
  },[videoId])

  return (
    <div className="VideoInfo">
      <hr className="VideoInfo__ruler--tablet" />
      <div className="VideoInfo__details">
        <div className="VideoInfo__details__col">
          <div className="VideoInfo__details__col__group">
            <p className="VideoInfo__details__col__group__item font-Subheader">By {author}</p>
          </div>
          <div className="VideoInfo__details__col__group">
            <p className="VideoInfo__details__col__group__item font-Body font-Faded">{utils.getRelativeTime(videoDate)}</p>
          </div>
        </div>
        <div className="VideoInfo__details__col">
          <div className="VideoInfo__details__col__group">
            <img className="VideoInfo__details__col__group__icon" src={iViews} alt="views"/>
            <p className="VideoInfo__details__col__group__item font-Body font-Faded">{views}</p>
          </div>
          <div className="VideoInfo__details__col__group">
            <img className="VideoInfo__details__col__group__icon VideoInfo__details__col__group__icon--likes" src={currentlikeIcon} alt="likes" onClick={handleLikedClick} />
            <p className="VideoInfo__details__col__group__item font-Body font-Faded">{newLikes}</p>
          </div>
        </div>
      </div>
      <hr className="VideoInfo__ruler" />
    </div>
  );
}
