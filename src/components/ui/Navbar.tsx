import React from "react";
import Logo from "./Logo";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-5 w-full z-[999]  flex justify-center items-center">
      <div className="w-[70%] max-w-screen-2xl  flex mx-auto items-center justify-between p-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 bg-black rounded-sm border border-[#252422] px-6 ">
        <div className="w-[7%]">
          <Logo />
        </div>
        <ul className="uppercase flex items-center text-xs gap-4">
          <Link href={"/"}>For women</Link>
          <Link href={"/"}>Contact Us</Link>
          <Link href={"/"}>About US</Link>
          <Link href={"/"}>FAQ</Link>
          <Link href={"/"}>Testimonials</Link>
          <Link href={"/pricing"}>Paywall to purchase course</Link>
        </ul>
        <button className="bg-gradient-to-r from-[#B72EB2D6] to-[#DF6ABADB] py-1 px-8 rounded-tl-md rounded-tr-md rounded-bl-xl  rounded-br-xl">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
