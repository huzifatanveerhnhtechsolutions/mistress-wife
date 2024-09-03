import {
  Images,
  MessageSquare,
  Newspaper,
  UserPlus,
  Video,
} from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const ForumLeftSide = (props: Props) => {
  return (
    <div className="  flex flex-col ">
      <div className="bg-[#AC2CA8CC] p-4 px-6 rounded-md flex items-center gap-4">
        <div className="w-[30%] bg-white rounded-full p-2  ">
          <Image
            src={"/assets/user.png"}
            alt="user"
            width={100}
            height={100}
            className=""
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-lg">Rosy Marten</h1>
          <h2 className="flex items-center gap-2 text-sm">
            <UserPlus fill="white" size={15} /> 1,299 followers
          </h2>
        </div>
      </div>
      <div className="px-4">
        <ul>
          <li className="flex gap-4 items-center">
            <Newspaper color="black" fill="#8DC63F" />

            <span className="border-b py-4 w-full">My Newsfeed</span>
          </li>
          <li className="flex gap-4 items-center">
            <MessageSquare color="black" fill="#F7941E" />

            <span className="border-b py-4 w-full">Previous Form</span>
          </li>
          <li className="flex gap-4 items-center">
            <Images color="black" fill="#1C75BC" />
            <span className="border-b py-4 w-full">Images</span>
          </li>
          <li className="flex gap-4 items-center">
            <Video color="black" fill="#9E1F63" />

            <span className="border-b py-4 w-full">Videos</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForumLeftSide;
