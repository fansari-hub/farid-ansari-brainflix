import './VideoTitle.scss'
export default function VideoTitle(prop){
    const {title} = prop;
    return(
        <h1 className="VideoTitle font-PageHeader">{title}</h1>
    );

}