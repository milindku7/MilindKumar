import React from 'react';
import './ScatteredMedia.css';

type ScatteredMediaProps = {
  img1?: string;
  img2?: string;
  videoSrc?: string;
  videoImageSrc?: string;
};

const ScatteredMedia: React.FC<ScatteredMediaProps> = ({
  img1,
  img2,
  videoSrc,
  videoImageSrc,
}) => {
  const hasVideo = Boolean(videoSrc || videoImageSrc);

  return (
    <div className="organized-media-container">
      
      {/* --- DEMO SECTION --- */}
      <div className="demo-section">
        {img1 && (
          <a
            className="media-card"
            href={img1}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open project image in a new tab"
          >
            <img src={img1} alt="Project demonstration" className="organized-media-content" />
          </a>
        )}

        {hasVideo && (
          <a
            className="media-card"
            href={videoImageSrc || videoSrc}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open project video in a new tab"
          >
            {videoImageSrc ? (
              <img src={videoImageSrc} alt="Project video preview" className="organized-media-content" />
            ) : (
              <video src={videoSrc} autoPlay loop muted playsInline className="organized-media-content" />
            )}
          </a>
        )}
      </div>

      {/* --- TECH STACK SECTION --- */}
      {img2 && (
        <div className="tech-stack-section">
          <span className="tech-stack-label">Built With</span>
          <a
            className="media-card tech-stack-card"
            href={img2}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open tech stack details in a new tab"
          >
            <img 
              src={img2} 
              alt="Programming languages and tools used" 
              className="organized-media-content tech-stack-image" 
            />
          </a>
        </div>
      )}
      
    </div>
  );
};

export default ScatteredMedia;