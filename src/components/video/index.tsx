"use client";
import React, { Suspense } from "react";
import VideoTabs from "./tabs";
export default function Video() {
  return (
    <div className="px-5 lg:px-20 py-5 md:py-10">
      <Suspense fallback={"loading"}>
        <VideoTabs />
      </Suspense>
    </div>
  );
}
