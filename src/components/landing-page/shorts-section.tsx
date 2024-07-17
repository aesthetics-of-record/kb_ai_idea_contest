"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Button } from "../ui/button";

const shorts_list = [
    "/shorts/Gen-3 Alpha 233444292, Concept Introducing.mp4",
    "/shorts/Gen-3 Alpha 925801493, Concept The camera.mp4",
    "/shorts/Gen-3 Alpha 1048344810, Concept Introducing.mp4",
    "/shorts/Gen-3 Alpha 3043218093, Concept Two people.mp4",
    "/shorts/Gen-3 Alpha 3155825407, Concept A single pe.mp4",
    "/shorts/Gen-3 Alpha 3156613047, Concept The camera.mp4"
]

const ShortsSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [play, setPlay] = useState([false, false, false, false,false, false, false, false,false, false, false, false,false, false, false, false]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shorts_list.map((url, i) => {
            return <div
            key={i}
            className="flex justify-center"
              onMouseEnter={() => {
                const copy = [...play]
                copy[i] = true
                setPlay(copy);
              }}
              onMouseLeave={() => {
                const copy = [...play]
                copy[i] = false
                setPlay(copy);
              }}
            >
              <ReactPlayer
                url={url}
                width="250px"
                height="100%"
                playing={play[i]}
                loop={true}
              />
            </div>
          })}
          
          
        </div>
      )}
    </>
  );
};

export default ShortsSection;
