import React from "react";
import { Sidebar } from "./sidebar";
import VideoPlayer from "@/usable/player";
import Dropdown from "@/usable/dropdown";
import DescriptionBox from "../ui/DescriptionBox";

export default function VideoWithSidebar() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-x-4 mb-5">
        {/* Sidebar - Full width on smaller screens, 1/3 width on large screens */}
        <div className="w-full lg:w-[30%] lg:flex-shrink-0">
          <Sidebar />
        </div>
        {/* Video - Full width on smaller screens, 2/3 width on large screens */}
        <div className="w-full lg:w-2/3">
          {/* Video Player */}
          <VideoPlayer url="http://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          {/* Description Dropdown for large screens */}
        </div>
        {/* <div className="hidden lg:block">
          <Dropdown>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            }
          </Dropdown>
        </div> */}
      </div>
      {/* Description Dropdown for small screens */}
      <div className="">
        <Dropdown>
          <DescriptionBox />
        </Dropdown>
      </div>
    </>
  );
}
