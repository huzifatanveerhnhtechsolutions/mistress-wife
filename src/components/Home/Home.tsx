import Image from "next/image";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="relative">
      <div className="relative w-screen flex h-screen z-10">
        <div className="relative w-[33.33%] h-screen object-fit">
          <Image src="/assets/3.png" alt="3" layout="fill" className="h-full" />

          <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent h-full opacity-100"></div>
        </div>

        <div className="relative w-[33.33%] h-screen object-fit">
          <Image src="/assets/2.png" alt="2" layout="fill" className="h-full" />

          <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent h-full opacity-100"></div>
        </div>

        <div className="relative w-[33.33%] h-screen object-fit">
          <Image
            src="/assets/4.png"
            alt="4"
            layout="fill"
            // objectFit="fit"
            className="h-full"
          />

          <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent h-full opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
