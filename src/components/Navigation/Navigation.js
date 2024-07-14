import SearchBox from "../SearchBox/SearchBox";
import SiteLogo from "../SiteLogo/SiteLogo";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className="Navigation">

      <div className="Navigation__logo">
        <Link to="/">
          <SiteLogo />
        </Link>
      </div>

      <div className="Navigation__search">
        <SearchBox />
      </div>

      <div className="Navigation__upload">
        <Link to="/upload">
          <Button label="UPLOAD" iconType={1} />
        </Link>
      </div>

      <div className="Navigation__avatar">
        <Avatar useDefault={true} />
      </div>
      
    </div>
  );
}
