import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import uploadToStorage from "../../firebase/uploadToStorage";
import Loader from "./../loader";

const Form = ({ user }) => {
  const [isLoading, setIsLoading] = useState();
  //1- form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    //2- inputlardaki verilere eriş
    const text = e.target[0].value.trim();
    const file = e.target[1].files[0];

    //3- yazı ve resim içeriği yoksa fonksiyonu durdur
    if (!text && !file) return toast.warning("Lütfen içerik giriniz.");
    //4- resmi storage'a kaydet
    const url = await uploadToStorage(file);

    setIsLoading(true);
    //5- kolleksiyonun referansını al
    const tweetsCol = collection(db, "tweets");

    //6- kolleksiyona yeni tweet belgesi ekle
    await addDoc(tweetsCol, {
      textContent: text,
      imageContent: url,
      isEdited: false,
      likes: [],
      user: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    toast.success("Tweet başarıyla yayınladı.");

    setIsLoading(false);
    //7- formu sıfırlar
    e.target.reset();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border-b p-5 border-zinc-600 flex gap-3 "
    >
      <img
        src={user?.photoURL}
        className="h-[35px] md:h-[45px] rounded-full mt-1"
        alt="profile pic"
      />
      <div className="w-full">
        <input
          type="text"
          className="w-full bg-transparent shadow-none mt-0 mb-2 text-gray-300 md:text-lg"
          placeholder="Neler Oluyor?"
        />
        <div className="flex justify-between items-center">
          <input type="file" id="img" className="hidden" />
          <label htmlFor="img" className="cursor-pointer">
            <BsCardImage />
          </label>

          <button
            disabled={isLoading}
            className="bg-blue-600 px-3 py-2 rounded-full min-w-[85px] min-h-[40px] transition hover:bg-blue-800"
          >
            {isLoading ? <Loader /> : "Tweetle"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
