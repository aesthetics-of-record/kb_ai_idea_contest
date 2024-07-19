"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const PlayerSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=cF5odCFUiRY"
              width={350}
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=XLrxC40NhSU"
              width={350}
            />
          </div>

          <div className="h-32" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=phcQa8-dpgY"
                width={350}
              />
            </div>
            <div className="flex justify-center items-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=KwS6KUJm7to"
                width={350}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerSection;
