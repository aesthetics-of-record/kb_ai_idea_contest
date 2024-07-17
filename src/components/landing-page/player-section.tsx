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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=phcQa8-dpgY"
            width={350}
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=KwS6KUJm7to"
            width={350}
          />
        </div>
      )}
    </>
  );
};

export default PlayerSection;
