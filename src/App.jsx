import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed/index";
import Login from "./pages/Login/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
