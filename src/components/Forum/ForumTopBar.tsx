import { Bell, Images, Map, Pencil, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const ForumTopBar = (props: Props) => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="bg-[#262D34] w-[90%]  rounded-xl p-3 flex gap-2 items-center">
        <Image src={"/assets/user.png"} alt="user" width={50} height={50} />
        <input
          placeholder="Lets share whats going on your mind"
          className="rounded-md bg-[#2C353D] p-2 w-full"
        />
        <div className="flex items-center gap-2">
          <Pencil color="#6D6E71" />
          <Images color="#6D6E71" />
          <Video color="#6D6E71" />
          <Map color="#6D6E71" />
        </div>
        <button className="bg-[#AC2CA8] p-2 rounded-lg">Publish</button>
      </div>
      <div className="px-3 border-l">
        <Bell color="black" fill="white" />
      </div>
    </div>
  );
};

export default ForumTopBar;
