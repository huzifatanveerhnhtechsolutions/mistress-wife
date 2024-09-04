import Video from "@/components/video";
import Videos from "@/components/videos/Videos";
import React, { Suspense } from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <Videos />
      <Suspense>
        <Video />
      </Suspense>
    </div>
  );
};

export default page;
