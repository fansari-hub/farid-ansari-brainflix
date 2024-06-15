export default function VideoInfo(prop){
    const {author, videoDate, views, likes} = prop
    return (
        <>
        <hr/>
        <p>By: {author}</p>
        <p>Views: {views}</p>
        <p>Date: {videoDate}</p>
        <p>Likes: {likes}</p>
        <hr/>
        </>
    );
}