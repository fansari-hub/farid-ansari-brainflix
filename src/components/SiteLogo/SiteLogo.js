import "./SiteLogo.scss"
import logo from '../../assets/Logo/BrainFlix-logo.svg'

export default function SiteLogo(){
    return(
        <img className="SiteLogo" src={logo} alt='BrainFlix Logo'/>
    );
}