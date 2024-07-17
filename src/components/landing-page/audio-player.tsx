'use client';

import useSound from 'use-sound';
import { Button } from '../ui/button';
import { useState } from 'react';
import Image from 'next/image';
import { PauseIcon, PlayIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AudioPlayer = ({
  soundUrl,
  imgUrl,
}: {
  soundUrl: string;
  imgUrl: string;
}) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop, pause, duration }] = useSound(soundUrl, {
    playbackRate,
  });

  const handleClick = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="group overflow-hidden h-32 aspect-square relative hover:opacity-80">
        <Image
          src={imgUrl}
          alt="image"
          width={128}
          height={128}
        />
        <div
          className={cn(
            'absolute flex justify-center w-full top-[48px] transition-all duration-300 opacity-0 group-hover:opacity-70',
            isPlaying && 'opacity-80'
          )}
        >
          <button
            onClick={handleClick}
            className={cn(
              'rounded-full w-10 h-10 bg-primary flex items-center justify-center'
            )}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      </div>
    </>
  );
};
