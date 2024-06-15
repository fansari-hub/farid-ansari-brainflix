import SearchBox from "./SearchBox";
import SiteLogo from "./SiteLogo";
import Avatar from "./Avatar";
import Button from "./Button";
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
      <div className="Navigation__avatar">
        <Avatar />
      </div>
      <div className="Navigation__upload">
        <Button label="UPLOAD" />
      </div>
    </div>
  );
}
