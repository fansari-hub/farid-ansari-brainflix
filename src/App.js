import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/video/:videoId" element={<HomePage/>} />
      <Route path="/upload" element={<UploadPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
