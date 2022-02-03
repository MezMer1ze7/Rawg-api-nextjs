import Image from 'next/image';
import React from 'react';
import GameScreenShots from './GameScreenShots';

const GameDetails = ({details, screenShot}) => {
  return (
    <div className="h-full p-5 md:px-24">
      <div className='flex items-center justify-center'>
      <div className="w-full md:w-[70%] h-full rounded-sm overflow-hidden">
        {details?.background_image?
      <Image src={details?.background_image} alt="sad" width={1920} height={1080} layout='responsive' objectFit='cover' quality={100} priority placeholder="blur"
          blurDataURL/>
          :
          <div className="flex items-center justify-center h-[50vh]">
              <h1>No image</h1>
          </div>
      }
      </div>
      </div>
      <div className="flex gap-x-10 justify-between items-center text-sm md:text-lg font-bold text-gray-300 pt-5">
        <h1 className='link'><a href={details.website} rel="noopener noreferrer" target='_blank'>{details.name}</a></h1>
        <h1>Playtime: {details?.playtime} hour</h1>
      </div>
      <p className='text-[#c5c5c5] text-xs md:text-sm py-10'>{details.description_raw}</p>

        <GameScreenShots screenShot={screenShot}/>

      <div className='flex justify-center flex-col items-center gap-y-2 pt-10'>
          <h1 className="font-thin text-xs md:text-sm">Buy it on</h1>
          <h2 className='flex flex-wrap text-xs justify-center gap-2 md:text-base gap-x-10 '>{details.stores.map(store=><a key={store.store?.id} rel="noopener noreferrer" href={`https://${store.store?.domain}`} target="_blank">{store.store.name}</a>)}</h2>
      </div>
      <div className="flex justify-center flex-col items-center gap-y-2 pt-10">
          <h1 className="font-thin py-2 text-center text-xs md:text-sm ">Tags</h1>
          <h2 className='flex gap-5 justify-center  flex-wrap'>
          {details?.tags.map(tag=> <span key={tag?.id} className="px-1 text-xs bg-[#383838] text-[#c5c5c5] rounded">{tag?.name}</span>)}
          </h2>
      </div>
  </div>
  );
};

export default GameDetails;
