"use client";
import React, { forwardRef } from "react";
import { Player, PlayerReference } from "video-react";
import "video-react/dist/video-react.css"; // import css

interface VideoPlayerInterface {
  url: string;
  ref: any;
}
const VideoPlayer = forwardRef<PlayerReference, VideoPlayerInterface>(
  ({ url }, ref) => {
    // export default function VideoPlayer({ url }: VideoPlayerInterface) {
    return (
      <Player
        playsInline
        // poster="/poster.jpeg"
        src={url}
        ref={ref}
      />
    );
  }
);

// Set a display name for debugging purposes
VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
