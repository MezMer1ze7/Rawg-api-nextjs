import Image from 'next/image';
import {useEffect, useRef} from 'react';
import gsap from 'gsap';


const EventSection = () => {
  const eventRef = useRef()
  const evenTl = gsap.timeline()

  useEffect(()=>{
    evenTl.fromTo(eventRef?.current, {clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'}, {clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)', duration:1, ease:"Power1.easeIn", delay:.1})
  },[evenTl])

  return (
  <section ref={eventRef} className="relative h-40 w-full flex my-10 overflow-x-hidden">
    <div className="relative w-1/2 h-full shrink-0">
        <Image
          src="/horizon.jpg"
          alt="assassin creed"
          priority
          layout="fill"
          objectFit="cover"
          className="w-full"
          quality={100}
          placeholder="blur"
          blurDataURL
        />

      </div>
    <div className="relative w-1/2 h-full shrink-0" >
        <Image
          src="/god of war.jpg"
          alt="assassin creed"
          priority
          layout="fill"
          objectFit="cover"
          className="w-full"
          quality={100}
          placeholder="blur"
          blurDataURL
        />
      </div>
      <div className="absolute left-0 top-0 bg-black bg-opacity-50 backdrop-blur-[1px] h-full w-full"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
        <h1 className="font-bold text-lg md:text-2xl whitespace-nowrap">Join The Sheeesh Event</h1>
        <p className="font-light text-sm md:text-base">And get a free cupon</p>
        <button className="bg-[#269F33] px-2 rounded mt-2">Join</button>
      </div>
  </section>
  );
};

export default EventSection;
