import "./UploadPage.scss";

import Navigation from "../components/Navigation/Navigation";

export default function UploadPage() {
  return (
    <div className="UploadPage">
      <nav className="UploadPage__navigation">
        <Navigation />
      </nav>
      <main className="UploadPage__mainContent">
        <p>UPLOAD PAGE SECTION</p>
      </main>
    </div>
  );
}