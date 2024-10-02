import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed/index";
import Login from "./pages/Login/index";
import Protected from "./components/protected/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* oturumu açık olmayanlar bu routelara erişememeli */}
        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          {/* <Route path="/profile" element={"Profile"} />
          <Route path="/setting" element={"Ayar"} />
          <Route path="/friend" element={"Arkadaş"} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
