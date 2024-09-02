import React from "react";
import Logo from "./Logo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-10 w-full z-[999]  flex justify-center items-center">
      <div className="w-[70%] max-w-screen-2xl  flex mx-auto items-center justify-between p-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 bg-black rounded-sm border border-[#252422] px-6 ">
        <div className="w-[7%]">
          <Logo />
        </div>
        <ul className="uppercase flex items-center text-xs gap-4">
          <li>For women</li>
          <li>Contact Us</li>
          <li>About US</li>
          <li>FAQ</li>
          <li>Testimonials</li>
          <li>Paywall to purchase course</li>
        </ul>
        <button className="bg-gradient-to-r from-[#B72EB2D6] to-[#DF6ABADB] py-1 px-8 rounded-tl-md rounded-tr-md rounded-bl-xl  rounded-br-xl">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
