import Image from "next/image";
import React from "react";

type Props = {};

const Videos = (props: Props) => {
  return (
    <div>
        <div className="mt-12"></div>
      <Image
        src={"/assets/videos.png"}
        alt="videos"
        width={1920}
        height={800}
      />
    </div>
  );
};

export default Videos;
