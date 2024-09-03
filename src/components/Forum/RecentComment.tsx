import Image from "next/image";
import React from "react";

type Props = {};

const RecentComment = (props: Props) => {
  return (
    <div className="flex gap-4 py-2 items-center">
      <div>
        <Image src={"/assets/user.png"} alt="user" width={50} height={50} />
      </div>
      <div className="flex flex-col gap-2 border-b pb-2">
        <h1 className="text-[#27AAE1]">Diana Amber</h1>
        <h1 className="text-[#AC2CA8]">Lorem ipsum dolor</h1>
      </div>
    </div>
  );
};

export default RecentComment;
