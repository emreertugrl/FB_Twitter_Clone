import React from "react";
import Modal from ".";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const MailModal = ({ isOpen, close }) => {
  // form gönderilince kullanıcının eposta adresine sıfırlama maili gönder
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const mail = e.target[0].value;
    sendPasswordResetEmail(auth, mail)
      .then((res) => {
        toast.success(
          "Şifre sıfırlama mail'i başarıyla gönderildi. Lütfen mailinizi kontrol ediniz."
        );
        close();
      })
      .catch((err) => {
        console.log(err);
        toast.warning("Üzgünüz bir hata oluştu.");
      });
  };
  return (
    <Modal isOpen={isOpen} close={close}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1 className="text-3xl">Şifreni mi unuttun?</h1>
        <p className="text-gray-400">
          Email adresine bir şifre sıfırlama bağlantısı göndericez.
        </p>
        <input type="text" className="mt-5" />

        <button
          type="submit"
          className="hover:bg-gray-300 transition bg-white text-black rounded-full mt-6"
        >
          Mail Gönder
        </button>
        <button
          type="button"
          className="hover:bg-gray-300 transition bg-white text-black rounded-full mt-6"
          onClick={close}
        >
          İptal
        </button>
      </form>
    </Modal>
  );
};

export default MailModal;
