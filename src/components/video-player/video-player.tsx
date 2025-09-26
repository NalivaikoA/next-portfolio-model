"use client";

import { useRef, useState } from "react";
import styles from "./video-player.module.scss";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <div className={styles.playerWrapper}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className={styles.video}
        controls={playing}
      />
      {!playing && (
        <button
          className={styles.playButton}
          onClick={handlePlay}
          aria-label="Play video"
        >
          ▶︎
        </button>
      )}
    </div>
  );
}
