'use client';
import { useState, useRef } from 'react';
import { Play } from './Vectors';

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  function toggleVideo() {
    setPlaying(!playing);
    videoRef.current.playing = !playing;
  }
  return (
    <div className='grid aspect-video rounded-rounding' onClick={toggleVideo}>
      {!playing && (
        <div className='row-end-1 col-end-1 flex items-center justify-center rounded-2xl z-10 text-secondary-body'>
          <Play />
        </div>
      )}
      <video
        className='row-end-1 col-end-1 bg-accent w-full rounded-2xl aspect-video'
        ref={videoRef}
      ></video>
    </div>
  );
}

export default Video;
