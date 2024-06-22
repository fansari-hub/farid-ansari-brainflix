import SearchBox from "../SearchBox/SearchBox";
import SiteLogo from "../SiteLogo/SiteLogo";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className="Navigation">
      <div className="Navigation__logo">
        <SiteLogo />
      </div>
      <div className="Navigation__search">
        <SearchBox />
      </div>
      <div className="Navigation__upload">
        <Button label="UPLOAD" iconType={1} />
      </div>
      <div className="Navigation__avatar">
        <Avatar useDefault={true} />
      </div>
    </div>
  );
}
