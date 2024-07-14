import "./UploadPage.scss";

import Navigation from "../components/Navigation/Navigation";
import GenericTitle from "../components/GenericTitle/GenericTitle";
import UploadVideo from "../components/UploadVideo/UploadVideo";

export default function UploadPage() {
  return (
    <div className="UploadPage">
      <nav className="UploadPage__navigation">
        <Navigation />
      </nav>
      <main className="UploadPage__mainContent">
        <hr/>
        <GenericTitle title="Upload Video"/>
        <UploadVideo/>
      </main>
    </div>
  );
}