import React, { FC, useState } from "react";
import "./YouTubeVideo.css";

export interface YouTubeVideoProps {
  /** Optional number that controls the height of the container */
  height?: number;
  /** String that represents the id of the youtube video. Primarily used to fetch the thumbnail and the video itself*/
  videoId: string;
  /** Optional number that controls the width of the container */
  width?: number;
}

const YouTubeVideo: FC<YouTubeVideoProps> = ({
  videoId,
  width = 560,
  height = 315,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  const handlePlay = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="youtube-video-container" style={{ width, height }}>
      {!isVideoLoaded ? (
        <>
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="video-thumbnail"
          />
          <button onClick={handlePlay} className="play-button">
            <div className="play-button-inner">
              <div className="play-button-triangle"></div>
            </div>
          </button>
        </>
      ) : (
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeVideo;
