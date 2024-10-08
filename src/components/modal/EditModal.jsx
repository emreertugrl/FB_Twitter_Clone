import React, { useState } from "react";
import Modal from "./index";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import uploadToStorage from "./../../firebase/uploadToStorage";

const EditModal = ({ isOpen, close, tweet }) => {
  // resmi kaldırma state'i
  const [isPicDeleting, setIsPicDeleting] = useState(false);
  // dökümanı güncelle
  const handleSubmit = async (e) => {
    e.preventDefault();
    // inputtaki veriye eriş
    const text = e.target[0].value;
    // fotoya ulaşma
    // console.dir(e.target[1].files[0])
    const file = e.target[1].files?.[0];
    // doc ref alınır
    const tweetRef = doc(db, "tweets", tweet.id);
    // ortak kısmı obje yaparız
    let updatedData = { textContent: text, isEdited: true };
    // eğer kullanıcı resmi silmek istiyorsa
    if (isPicDeleting) {
      updatedData.imageContent = null;
      // state'i sıfırlar
      setIsPicDeleting(false);
    }
    if (file) {
      // yeni resim seçildiyse
      const imageUrl = await uploadToStorage(file);
      updatedData.imageContent = imageUrl;
    }
    // yazıyı güncelle (sadece değişecek olanı veriyoruz)
    await updateDoc(tweetRef, updatedData)
      .then(() => {
        // bildirim
        toast.success("Tweet başarıyla düzenlendi!");
        //modalı kapat
        close();
      })
      .catch((err) => {
        toast.error("Bir sorun oluştu");
      });
  };
  return (
    <Modal isOpen={isOpen} close={close}>
      <h1 className="text-2xl">Tweet'i düzenle</h1>
      <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
        <label>İçeriği Değiştir</label>
        <input defaultValue={tweet.textContent} type="text" className=" mt-3" />
        {/*  */}
        <label className="mt-10 mb-2">Fotoğraf Ekle/Değiştir</label>
        {!isPicDeleting && tweet.imageContent ? (
          <button
            onClick={() => setIsPicDeleting(true)}
            className=" bg-orange-500"
          >
            Resmi Kaldır
          </button>
        ) : (
          <input type="file" />
        )}
        <div className="flex justify-end gap-5 mt-10">
          <button
            onClick={close}
            type="button"
            className="bg-gray-500 hover:bg-gray-600 transition"
          >
            Vazgeç
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 transition">
            Kaydet
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
