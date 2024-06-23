import './GenericTitle.scss'
export default function GenericTitle(prop){
    const {title} = prop;
    return(
        <h1 className="GenericTitle font-PageHeader">{title}</h1>
    );

}