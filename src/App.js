import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
const defaultUserID = "001";
const defaultUserName = "Current Active User";


if (!localStorage.getItem("userID")){
  localStorage.setItem("userID", defaultUserID);
  localStorage.setItem("userName" , defaultUserName);
}


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
