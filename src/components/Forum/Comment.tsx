import Image from "next/image";
import React from "react";

type Props = {};

const Comment = (props: Props) => {
  return (
    <div className="flex gap-2 py-4">
      <div>
        <Image src={"/assets/user.png"} alt="user" width={60} height={60} />
      </div>
      <div>
        <span className="text-[#27AAE1]">John</span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Reiciendis nulla pariatur illo aliquid
        veniam, quidem quasi beatae
      </div>
    </div>
  );
};

export default Comment;
