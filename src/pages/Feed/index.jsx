import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Feed = () => {
  const handleClick = () => {
    signOut(auth)
      .then((res) => {
        toast.info("Oturum Kapatıldı");
      })
      .catch((err) => {});
  };
  return (
    <div>
      <h1 className="text-3xl text-center my-10">Anasayfa</h1>
      <button onClick={handleClick}>Çıkış Yap</button>
    </div>
  );
};

export default Feed;
