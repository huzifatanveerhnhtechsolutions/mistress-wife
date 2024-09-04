import React, { forwardRef } from "react";
import VideoPlayer from "@/usable/player";
// import { VideoInterface } from "@/types";
import { PlayerReference } from "video-react";

interface VideoCompInterface {
  item: { url: string; title: string };
}

const Videos = forwardRef<PlayerReference, VideoCompInterface>(
  ({ item }, ref) => {
    return (
      <div className="h-[650px]">
        {/* loader */}
        {/* <div role="status" className="flex items-center justify-center min-h-[500px] max-w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>

          <span className="sr-only">Loading...</span>
        </div> */}
        {/* loader */}
        <div className="w-full bg-[#FFC619] relative h-4 xs:h-6 sm:h-7 md:h-8 lg:h-14">
          <h2 className="w-full font-popins font-[600] text-[1.3rem] xs:text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[4rem] text-dark text-center absolute z-10">
            {/* When The Skin Is &apos;Skinning */}
            {item.title}
          </h2>
          &nbsp;
        </div>
        <VideoPlayer url={item.url} ref={ref} />
        {/* <video ref={ref} width="90%" controls>
          <source src={item.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    );
  }
);

// Set a display name for debugging purposes
Videos.displayName = "VideoComp";

export default Videos;
