import { Facebook } from "lucide-react";
import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-[#040404] relative h-screen flex justify-end w-screen">
      <div className="absolute w-[10%]  z-40 top-6 left-6">
        <Image
          src={"/assets/logo2.png"}
          alt="model"
          width={200}
          height={120}
          className="h-full "
        />
      </div>
      <div className="absolute w-[5%] z-40 top-4 right-4">
        <Image
          src={"/assets/sphere2.png"}
          alt="model"
          width={100}
          height={100}
          className="h-full "
        />
      </div>
      <div className="w-[90%] absolute top-0 left-0 h-full object-contain  z-20">
        <Image
          src={"/assets/model.png"}
          alt="model"
          width={1920}
          height={1280}
          className="h-full "
        />
        <div className="absolute w-[15%] bottom-0 left-20">
          <Image
            src={"/assets/sphere.png"}
            alt="asd"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="w-[25%] absolute top-[50%] transform -translate-x-[50%] -translate-y-[50%] right-0  z-50">
        <div className="flex flex-col justify-center ">
          <h1 className="uppercase text-5xl  font-cinzel text-center mb-4">
            Sign In.
          </h1>
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center py-2 px-10 gap-4 border-2 border-gray-800 rounded-2xl ">
              <FaGoogle /> Countinue with Google
            </button>
            <button className="flex items-center justify-center px-10 py-2 gap-4 border-2 border-gray-800 rounded-2xl w-full">
              <FaFacebook />
              Countinue with facebook
            </button>
            <div className="mb-4 text-center">or</div>
          </div>
          <form action="">
            <div className="flex flex-col gap-4">
              <input
                placeholder="Email"
                type="text"
                className="bg-inherit border-2 border-gray-800 w-[100%] py-2 px-4 rounded-2xl"
              />
              <input
                placeholder="password"
                type="password"
                className="bg-inherit border-2 border-gray-800 w-[100%] py-2 px-4 rounded-2xl"
              />
            </div>
            <button className="bg-gradient-to-r from-[#B72EB2D6] to-[#DF6ABADB] w-full mt-10 py-2 rounded-lg">
              Sign In
            </button>
            <div className="flex justify-end text-xs mt-2">
              <button>forgot password?</button>
            </div>
          </form>
          <div className="text-xs flex justify-center items-center mt-10">
            Dont have an account?
            <button className="font-bold"> Create an account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
