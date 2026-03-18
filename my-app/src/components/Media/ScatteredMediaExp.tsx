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
    // Main frame container
    <div 
      style={{
        position: 'relative',
        width: '600px',
        maxWidth: '800px',
        height: '400px',
        margin: '2rem auto',
        // Changed to visible so the scaled image doesn't get clipped by the frame
        overflow: 'visible', 
      }}
    >
      {/* Picture */}
      <div
        className="media-wrapper"
        style={{
          position: 'absolute',
          top: '8%',
          left: '10%',
          width: '300px',
          height: '200px',
          zIndex: 1
        }}
      >
        <img
          src={img1}
          alt="Scattered random"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </div>

      {videoSrc ? (
        <div
          className="media-wrapper"
          style={{
            position: 'absolute',
            top: '45%',
            left: '52%',
            width: '260px',
            height: '150px',
            transform: 'rotate(-7deg)',
            zIndex: 2,
          }}
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ScatteredMediaExp;