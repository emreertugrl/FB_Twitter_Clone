import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import Aside from "./Aside";
import Main from "./Main";
import Nav from "./Nav";

const Feed = () => {
  return (
    <div className="feed h-screen bg-black overflow-hidden text-white">
      <Nav />
      <Main />
      <Aside />
    </div>
  );
};

export default Feed;
