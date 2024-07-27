import "./UploadPage.scss";

import Navigation from "../components/Navigation/Navigation";
import UploadVideo from "../components/UploadVideo/UploadVideo";

export default function UploadPage() {
  return (
    <div className="UploadPage">
      <nav className="UploadPage__navigation">
        <Navigation />
      </nav>
      <hr/>
      <main className="UploadPage__mainContent">
        <UploadVideo/>
      </main>
    </div>
  );
}