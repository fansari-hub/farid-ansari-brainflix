import "./Button.scss"

export default function Button(prop){

    const {label} = prop;
    return (
        <button className="Button">{label}</button>
    );
}