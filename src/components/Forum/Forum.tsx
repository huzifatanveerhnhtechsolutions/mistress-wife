"use client";
import React, { useState } from "react";
import ForumLeftSide from "./ForumLeftSide";
import ForumTopBar from "./ForumTopBar";
import ForumList from "./ForumList";
import RecentComment from "./RecentComment";
import Notification from "./Notification";

type Props = {};

const Forum = (props: Props) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div className="py-28 h-[calc(100vh)] font-lato hero_animation_forum z-50 ">
      {active && (
        <div className="absolute right-0 top-44 flex justify-end w-full float-right z-50 transition-all ease-in-out duration-300 ">
          <Notification />
        </div>
      )}

      <div className="w-[90%] max-w-screen-2xl mx-auto flex gap-6">
        <div className="hidden lg:block w-[25%] sticky  h-[calc(100vh-7rem)] overflow-y-auto">
          <ForumLeftSide />
        </div>

        <div className="w-full lg:w-[75%]">
          <div className="sticky  z-10 ">
            <ForumTopBar handleActive={handleActive} />
          </div>

          <div className="flex gap-4 mt-4">
            <div className="w-full lg:w-[70%] overflow-y-auto  h-[calc(100vh-12rem)]">
              <ForumList />
            </div>

            <div className="hidden lg:block w-[30%] sticky top-28 h-[calc(100vh-7rem)] overflow-y-auto">
              <div>
                <h1 className="text-xl">Recent Comments</h1>
                {[1, 2, 3, 4].map((_, idx) => (
                  <div key={idx}>
                    <RecentComment />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
