import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "./../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MailModal from "./../../components/modal/MailModal";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  // form gönderilince ne olacak
  const handleSubmit = (e) => {
    e.preventDefault();
    // kaydolma durumu
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Hesabınız Oluşturuldu.");
          navigate("/feed");
        })
        .catch((err) => toast.error("Hata!:" + err.code));
    } else {
      // giriş yapma durumu
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Hesabınız Giriş Yapıldı.");
          navigate("/feed");
        })
        .catch((err) => toast.error("Hata!:" + err.code));
    }
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label className="mt-5">Şifre</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <label
          htmlFor=""
          className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer text-end mt-2"
          onClick={() => setIsOpen(true)}
        >
          Şifreni mi Unuttun ?
        </label>

        <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300">
          {isSignUp ? "Kaydol" : "Giriş Yap"}
        </button>
      </form>
      <p className="mt-5">
        <span className="text-gray-500">
          Hesabınız
          {isSignUp ? " varsa" : " yoksa"}
        </span>
        <span
          className="cursor-pointer ms-2 text-blue-500"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Giriş Yapın" : "Kaydolun"}
        </span>
      </p>

      <MailModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default Form;
