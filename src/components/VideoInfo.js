import "./VideoInfo.scss";
export default function VideoInfo(prop) {
  const { author, videoDate, views, likes } = prop;
  return (
    <div className="VideoInfo">
      <hr />
      <div className="VideoInfo__details">
        <div>
          <p className="VideoInfo__details__item font-Subheader">By: {author}</p>
          <p className="VideoInfo__details__item font-Body font-Faded">{Intl.DateTimeFormat("en-US", { month: "2-digit", day: "2-digit", year: "numeric", timeZone: "America/Los_Angeles" }).format(videoDate)}</p>
        </div>
        <div>
          <p className="VideoInfo__details__item font-Body font-Faded">Views: {views}</p>
          <p className="VideoInfo__details__item font-Body font-Faded">Likes: {likes}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
