import Image from "next/image";
import React from "react";

type Props = {};

const Notification = (props: Props) => {
  return (
    <div className="rounded-2xl bg-gray-400 md:w-[30%]  px-4 py-8  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Notofication</h1>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4].map(() => (
          <div className="rounded-xl flex gap-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 bg-gray-800 py-4 px-2">
            <div>
              <Image
                src={"/assets/user.png"}
                alt="user"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Diana Amber</h1>
              <h1 className="text-xs">New Feature - Apr 30, 2024</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
