import "./TextBlock.scss"
export default function TextBlock(prop){
    const {text} = prop
    return (
        <p className="TextBlock font-Body">{text}</p>
    );
}