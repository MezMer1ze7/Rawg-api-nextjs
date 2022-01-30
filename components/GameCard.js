import Image from "next/image";
import {ThumbUpIcon} from '@heroicons/react/solid'




const GameCard = () => {


  return (
  <div  className="rounded-sm overflow-hidden opacity-1 shrink-0  ">
        <div className="relative min-w-[10rem] h-40">
          <Image src="/god of war.jpg" alt="gp" layout="fill" objectFit="cover"/>
        </div>
        <div className="flex flex-col  bg-[#383838] px-2 space-y-5 min-w-[10rem]">
          <h1 className="text-center">God of war</h1>
          <div className="flex text-[.6rem] font-thin justify-between items-start pb-2 text-[#e2e2e2]">
            <p>Release Date: 1/1/22</p>
            <div className="flex gap-x-1 items-center justify-around ">
              <ThumbUpIcon className="h-4 text-green-600 -translate-y-[.15rem]"/>
              {/* <h1>sad</h1> */}
              <p>5.12</p>
            </div>
          </div>
        </div>
  </div>
  );
};

export default GameCard;
