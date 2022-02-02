import Image from "next/image";
import React from "react";

const GameScreenShots = ({ screenShot }) => {
  return (
    <div className="">
        <div  className="flex  gap-2 overflow-x-scroll">
        {screenShot?.results.map((screen) => (
            <div key={screen.id} className="w-64 h-52 rounded-sm overflow-hidden shrink-0 mb-5">
            <Image
                quality={100}
                src={screen.image}
                alt="image"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL
            />
            </div>
        ))}
        </div>

    </div>
  );
};

export default GameScreenShots;
