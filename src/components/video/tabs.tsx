"use client";
import React, { useRef, useState } from "react";
import { Tabs, TabsRef } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { PlayerReference } from "video-react";
import { videos } from "@/lib/constants";
import VideoWithSidebar from "./videoWithSidebar";
import VideComp from "./videos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import './styles.css';

export default function VideoTabs() {
  const tabsRef = useRef<TabsRef>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [activeTab, setActiveTab] = useState(1);

  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach((video, index) => {
      if (index === swiper.activeIndex) {
        video.play(); // Play the current video
      } else {
        video.pause(); // Pause all other videos
        //   video.currentTime = ; // Optional: Reset the video to the start
      }
    });
  };

  const addToRefs = (el: PlayerReference) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  return (
    <Tabs
      aria-label="Tabs with underline"
      variant="underline"
      tabIndex={activeTab}
      ref={tabsRef}
      onActiveTabChange={(tab) => setActiveTab(tab)}
    >
      <Tabs.Item title="All">
        <VideoWithSidebar />
      </Tabs.Item>
      <Tabs.Item title="Next Topic" active>
        <Swiper
          className="mySwiper"
          direction={"vertical"}
          mousewheel={true}
          modules={[Mousewheel]}
          onSlideChange={handleSlideChange}
          // pagination={{
          //     clickable: true,
          // }}
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index}>
              <VideComp item={item} ref={addToRefs} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Tabs.Item>
    </Tabs>
  );
}
