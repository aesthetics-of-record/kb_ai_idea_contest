import TitleSection from '@/components/landing-page/title-section';
import { Button } from '@/components/ui/button';
import Banner from '../../../public/appBanner.png';
import Cal from '../../../public/cal.png';
import Image from 'next/image';
import React from 'react';
import {
  CLIENTS,
  PRICING_CARDS,
  PRICING_PLANS,
  USERS,
} from '@/lib/constants';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { randomUUID } from 'crypto';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import CustomCard from '@/components/landing-page/custom-card';
import Diamond from '../../../public/icons/diamond.svg';
import CheckIcon from '../../../public/icons/check.svg';
import PlayerSection from '@/components/landing-page/player-section';
import { AudioPlayer } from '@/components/landing-page/audio-player';
import ShortsSection from '@/components/landing-page/shorts-section';

const HomePage = () => {
  return (
    <>
      <section>
        <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
          <TitleSection
            pill="Gyeongsangbuk-do AI Project"
            title="AI 활용 홍보 영상"
          />
          {/* <div
            className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
          >
            <Button
              variant="btn-secondary"
              className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
          "
            >
              Demo
            </Button>
          </div> */}
          {/* <div
            className="md:mt-[-90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[-40px]
          relative
          sm:ml-0
          ml-[-50px]
        "
          >
            <Image
              src={Banner}
              alt="Application Banner"
            />
            <div
              className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
            ></div>
          </div> */}
          <PlayerSection />
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      "
      >
        <div
          className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-10
          top-22
        "
        />
        <TitleSection
          title="AI 홍보 음악"
          subheading="AI를 이용해 제작한 음악들 입니다."
          pill="Audio AI"
        />
        {/* <div
          className="mt-10
          max-w-[450px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-8
          border-washed-purple-300 
          border-opacity-10
        "
        >
          <Image
            src={Cal}
            alt="Banner"
            className="rounded-2xl"
          />
        </div> */}
        <div className="h-8" />
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          <AudioPlayer
            imgUrl="/covers/img1.jpeg"
            soundUrl="/sounds/1.mp3"
          />
          <AudioPlayer
            imgUrl="/covers/img2.jpeg"
            soundUrl="/sounds/our_kj.mp3"
          />
          <AudioPlayer
            imgUrl="/covers/img3.jpeg"
            soundUrl="/sounds/경주의 아름다움.mp3"
          />
          <AudioPlayer
            imgUrl="/covers/img4.jpg"
            soundUrl="/sounds/경상북도 찬가.mp3"
          />
          <AudioPlayer
            imgUrl="/covers/img5.jpeg"
            soundUrl="/sounds/5.mp3"
          />
        </div>
      </section>
      
      <section
        className="mt-20
        px-4
        sm:px-6
      "
      >
        <TitleSection
          title="숏츠"
          subheading="AI를 이용해 제작한 영상소스들입니다."
          pill="Shorts"
        />
        <div className='h-8'/>
        <ShortsSection />
        
      </section>

      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="팀 멤버"
            subheading=""
            pill="Member"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={index}
              className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                  'flex-row-reverse': index === 1,
                  'animate-[slide_250s_linear_infinite]': true,
                  'animate-[slide_250s_linear_infinite_reverse]':
                    index === 1,
                  'ml-[100vw]': index === 1,
                }),
                'hover:paused'
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${testimonial.image}`} />
                        <AvatarFallback>P</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className='h-52'/>
      </section>
    </>
  );
};

export default HomePage;
