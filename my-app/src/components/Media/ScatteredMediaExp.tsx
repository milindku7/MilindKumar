import React from 'react';
import './ScatteredMedia.css'; // Make sure the CSS file is imported!

type ScatteredMediaExpProps = {
  img1?: string;
  videoSrc?: string;
};

const ScatteredMediaExp: React.FC<ScatteredMediaExpProps> = ({
  img1 = 'https://picsum.photos/seed/exp-1/300/200',
  videoSrc,
}) => {
  return (
    <div className="scattered-media-exp-container">
      {/* Picture */}
      <a
        className="media-wrapper scattered-media-exp-image"
        href={img1}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open image in a new tab"
      >
        <img
          src={img1}
          alt="Scattered random"
          className="media-content"
        />
      </a>

      {videoSrc ? (
        <a
          className="media-wrapper scattered-media-exp-video"
          href={videoSrc}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open video in a new tab"
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="media-content"
          />
        </a>
      ) : null}
    </div>
  );
};

export default ScatteredMediaExp;