import React from "react";
import Image from "next/image";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Comment from "./Comment";
type Props = {};

const ForumCard = (props: Props) => {
  return (
    <div className="rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 py-4">
      <Image src={"/assets/forum.png"} alt="forum" width={1000} height={500} />
      <div className="p-4 flex gap-2  items-start rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 bg-gray-500">
        <div className="py-4">
          <Image src={"/assets/user.png"} alt="user" width={70} height={70} />
        </div>
        <div className="w-full">
          <div className="flex flex-col border-b py-4">
            <div className="flex justify-between ">
              <div className="flex gap-4">
                <h1 className="text-[#27AAE1]">Alexis Clark</h1>
                <h4 className="text-[#AC2CA8]">following</h4>
              </div>
              <div className="flex gap-4">
                <div className="text-[#AC2CA8] flex gap-2 items-center">
                  <ThumbsUp stroke="none" fill="#AC2CA8" /> 13
                </div>
                <div className="text-red-700 flex gap-2 items-center">
                  <ThumbsDown stroke="none" fill="red" /> 0
                </div>
              </div>
            </div>
            <div className="opacity-70">Published a photo about 3 mins ago</div>
          </div>
          <p className="border-b py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
          <Comment />
          <Comment />
          <div className="flex items-center gap-2 w-[100%]">
            <Image src={"/assets/user.png"} alt="user" width={50} height={50} />
            <input
              placeholder="Post a comment"
              className="bg-[#2C353D] p-2 rounded-md w-[70%]"
            />
            <button className="bg-[#AC2CA8] px-3 py-2 rounded-xl">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
