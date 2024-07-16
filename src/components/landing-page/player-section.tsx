'use client';

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const PlayerSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="grid grid-cols-2 gap-4">
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
        </div>
      )}
    </>
  );
};

export default PlayerSection;
