import React from "react";

type Props = {};

const DescriptionBox = (props: Props) => {
  return (
    <div className="py-4">
      <div className="bg-[#474747] rounded-2xl flex flex-col gap-4 p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur. Ut id purus in quis. Ac nunc
          ipsum augue interdum pharetra curabitur molestie ut. Odio elit in in
          sed. Leo amet ut tortor aliquam nunc mi. Odio natoque ullamcorper
          habitasse magna?
        </p>
        <textarea className="bg-white p-2 px-3 rounded-xl text-black" />
        <div className="flex justify-end w-full">
          <button className="bg-[#AC2CA8] w-[30%] py-2 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
