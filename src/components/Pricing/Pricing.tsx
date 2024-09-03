import Image from "next/image";
import React from "react";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div className="">
      <div className="w-full mt-12">
        <Image
          src={"/assets/pricing.png"}
          alt="banner"
          width={1920}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Pricing;
