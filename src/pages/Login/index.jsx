import React from "react";
import Form from "./Form";
import GoogleButton from "./GoogleButton";
const Login = () => {
  return (
    <div className="min-h-screen bg-[#242424] text-white grid place-items-center">
      <div className="bg-black py-8 px-32 rounded-lg flex flex-col gap-5">
        <div className="flex justify-center">
          <img className="h-[60px]" src="x-logo.webp" alt="x-logo" />
        </div>

        <h1 className="text-lg font-bold text-center">Twitter'a giriş yap</h1>

        <GoogleButton />

        <Form />
      </div>
    </div>
  );
};

export default Login;
