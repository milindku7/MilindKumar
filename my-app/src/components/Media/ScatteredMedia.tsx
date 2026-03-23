import React from 'react';
import './ScatteredMedia.css';

type ScatteredMediaProps = {
  img1?: string;
  img2?: string;
  videoSrc?: string;
  videoImageSrc?: string;
};

const ScatteredMedia: React.FC<ScatteredMediaProps> = ({
  img1 = 'https://picsum.photos/seed/project-1/300/200',
  img2 = 'https://picsum.photos/seed/project-2/300/200',
  videoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4',
  videoImageSrc,
}) => {

  return (
    <div className="scattered-media-container">
      {/* Image 1 */}
      <a
        className="media-wrapper media-item media-item-image-1"
        href={img1}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open image in a new tab"
      >
        <img src={img1} alt="Scattered random 1" className="media-content" />
      </a>

      {/* Video 1 */}
      <a
        className="media-wrapper media-item media-item-video"
        href={videoImageSrc || videoSrc}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open video in a new tab"
      >
        {videoImageSrc ? (
          <img src={videoImageSrc} alt="Project preview" className="media-content" />
        ) : (
          <video src={videoSrc} autoPlay loop muted playsInline className="media-content" />
        )}
      </a>

      {/* Image 2 */}
      <a
        className="media-wrapper media-wrapper-no-frame media-item media-item-image-2"
        href={img2}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open image in a new tab"
      >
        <img src={img2} alt="Scattered random 2" className="media-content" />
      </a>
    </div>
  );
};

export default ScatteredMedia;