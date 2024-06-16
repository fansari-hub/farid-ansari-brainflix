import "./VideoInfo.scss";
import iLikes from "../assets/Icons/likes.svg";
import iViews from "../assets/Icons/views.svg";

export default function VideoInfo(prop) {
  const { author, videoDate, views, likes } = prop;
  return (
    <div className="VideoInfo">
      <hr />
      <div className="VideoInfo__details">
        <div className="VideoInfo__details__col">
          <div className="VideoInfo__details__col__group">
            <p className="VideoInfo__details__col__group__item font-Subheader">By {author}</p>
          </div>
          <div className="VideoInfo__details__col__group">
            <p className="VideoInfo__details__col__group__item font-Body font-Faded">{Intl.DateTimeFormat("en-US", { month: "2-digit", day: "2-digit", year: "numeric", timeZone: "America/Los_Angeles" }).format(videoDate)}</p>
          </div>
        </div>
        <div className="VideoInfo__details__col">
          <div className="VideoInfo__details__col__group">
            <img src={iViews} />
            <p className="VideoInfo__details__col__group__item font-Body font-Faded">{views}</p>
          </div>
          <div className="VideoInfo__details__col__group">
            <img src={iLikes} />
            <p className="VideoInfo__details__col__group__item font-Body font-Faded">{likes}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
