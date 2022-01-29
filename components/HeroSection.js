import Image from "next/image";
import {useRef, useEffect} from "react";
import gsap from 'gsap'

const HeroSection = () => {

  const heroImageRef = useRef()
  const heroTextRef= useRef()
  const heroTl = gsap.timeline()
  
  useEffect(()=>{
    heroTl.to(heroImageRef?.current, {clipPath:'circle(100% at 50% 50%)', duration:1, delay:.1,ease: 'Power1.easeIn'})
    .to(heroTextRef?.current, {opacity:1, duration:1, ease: 'Power1.easeIn'}, '<')

  },[heroTl])

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh]">
      <div ref={heroTextRef} className="grid px-5 md:px-24  grid-rows-2 justify-center h-full items-center md:grid-rows-1 md:grid-cols-2 text-center md:text-left opacity-0 ">
        <div className="">
          <h1 className="font-bold text-xl md:text-4xl text-[#ABABAB]">
            Buy a game at a lower price
          </h1>
          <h1 className="font-thin text-[#E8E8E8 text-sm md:text-base">
            Get 20% off on your first game
          </h1>
        </div>
        <div className="space-y-1 md:text-center flex justify-start items-center flex-col  h-full md:h-auto">
          <h1 className="font-semibold md:text-xl">Login to get 5% more off</h1>
          <div className="space-x-5 text-sm md:text-base">
            <button className="px-3 md:px-5 bg-[#55359A] rounded ">Login</button>
            <button className="px-3 md:px-5 bg-[#3a3a3a] rounded ">Register</button>
          </div>
        </div>
      </div>
      <div ref={heroImageRef} className="hero_image absolute md:left-[100%] md:-translate-x-[100%] left-0 top-0 w-full h-full z-[-1]  md:max-w-[70%]  shadow-xl">
        <Image
          src="/assassin creed.jpg"
          alt="assassin creed"
          priority
          layout="fill"
          objectFit="cover"
          className="md:object-right-top"
          quality={100}

        />
      </div>
  
    </section>
  );
};

export default HeroSection;
