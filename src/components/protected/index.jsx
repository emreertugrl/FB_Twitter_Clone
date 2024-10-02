import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Protected = () => {
  // kullanıcının sayfayı görmeye yetkisi var mı
  const [isAuth, setIsAuth] = useState();
  // const navigate = useNavigate();
  // kullanıcının oturum verilerini al
  useEffect(() => {
    // onAuthStateChanged: kullanıcı oturumunu izler
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setIsAuth(user ? true : false);
    });
  }, []);

  // eğer kullanıcının oturum bilgileri yoksa login yönlendir
  if (isAuth === false) {
    return <Navigate to="/" />;
  }
  // if (user.role === "admin") {
  //   navigate("/admin");
  // }

  // parent route içerisinde alt route elementini renderla
  return <Outlet />;
};

export default Protected;
