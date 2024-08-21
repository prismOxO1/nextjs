"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "@/components/ui/animatedpin";
import moment from "moment-timezone";
import Asia from "./img/asia.webp";
import Image from 'next/image';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



export function AnimatedPinDemo() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeZone = "Asia/Phnom_Penh";
      const now = moment.tz(timeZone);
      const timeFormat = "h:mm a";
      setTime(now.format(timeFormat));
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <>
    <div className="h-[40rem] w-full flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl">
        {/* Text above the card on smaller screens */}
        <div className="flex flex-col items-start justify-center p-4 text-slate-100/50 lg:w-1/2 lg:pr-4">
          <div className="w-full max-w-[20rem] mx-auto mb-4 lg:mb-0">
            <h3 className="pb-2 m-0 text-2xl font-bold text-slate-100">
              {time}
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
                We're located in Southeast Asia and operate on a single time zone known as Cambodia Time (ICT - Indochina Time).
              </span>
            </div>
          </div>
        </div>
        {/* PinContainer on the right on larger screens */}
        <div className="flex items-center justify-center lg:w-1/2 lg:pl-4">
          <PinContainer
            title="Southeast Asia"
            href="https://www.google.com/search?sca_esv=2aa9326b59375f61&sca_upv=1&sxsrf=ADLYWIKm6P0bXDFIRtLUMjBLMHUoocLvPA:1724076489197&q=southeast+asia&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J3ppPdoHI1O-XvbXbpNjYYwWUVH6qTfR1Lpek5F-7GS501V_gvRZyNZrAxUlQAsZPw23xZzrbuWWeysufmf4jt65DZ7QTS6Nidei7Bejb_lzRHausIwLvJ7TswFtYwrNjxcF5OY&sa=X&ved=2ahUKEwi429C1nYGIAxUk7zgGHdRgMP4Q0pQJegQIDxAB&biw=2560&bih=1279&dpr=1.5"
          >
            <div className="bg-black relative w-[20rem] rounded-xl h-[20rem]">
              <Image
                src={Asia}
                alt="Southeast Asia"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>



    </>
  );
}

export default AnimatedPinDemo;
