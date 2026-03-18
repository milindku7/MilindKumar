import React from 'react';
import './ScatteredMedia.css';

type ScatteredMediaProps = {
  img1?: string;
  img2?: string;
  videoSrc?: string;
};

const ScatteredMedia: React.FC<ScatteredMediaProps> = ({
  img1 = 'https://picsum.photos/seed/project-1/300/200',
  img2 = 'https://picsum.photos/seed/project-2/300/200',
  videoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4',
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '600px',
        maxWidth: '800px',
        height: '400px',
        margin: '2rem auto',
        overflow: 'visible',
      }}
    >
      {/* Image 1 */}
      <div
        className="media-wrapper"
        style={{
          position: 'absolute',
          top: '8%',
          left: '10%',
          width: '300px',
          height: '200px',
          transform: 'rotate(-12deg)',
          zIndex: 1,
        }}
      >
        <img
          src={img1}
          alt="Scattered random 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      {/* Video 1 */}
      <div
        className="media-wrapper"
        style={{
          position: 'absolute',
          top: '47%',
          left: '15%',
          width: '320px',
          height: '180px', // Added an explicit height so the wrapper matches the video
          transform: 'rotate(8deg)',
          zIndex: 2,
        }}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      {/* Image 2 */}
      <div
        className="media-wrapper media-wrapper-no-frame"
        style={{
          position: 'absolute',
          top: '25%',
          left: '55%',
          width: '200px',
          height: '200px',
          transform: 'rotate(-6deg)',
          zIndex: 3,
        }}
      >
        <img
          src={img2}
          alt="Scattered random 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};

export default ScatteredMedia;