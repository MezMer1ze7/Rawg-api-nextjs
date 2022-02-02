import Image from "next/image";
import {ThumbUpIcon} from '@heroicons/react/solid'
import {useRouter} from 'next/router'





const GameCard = ({game}) => {

  const router = useRouter()

  const gameDetail = (id) =>{

    router.push({pathname: 'details', query:{game_id:id}})

  }



  return (
  <div  onClick={()=>gameDetail(game.id)} className="rounded-sm overflow-hidden opacity-1 shrink-0  ">
        <div className="relative min-w-[10rem] h-40">
        {game.background_image ? (
          <Image
            src={game?.background_image}
            alt={game.name}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <h1>No image</h1>
          </div>
        )}
      </div>
        <div className="flex flex-col pt-2  bg-[#383838] px-2 space-y-5 min-w-[10rem]">
          <h1 className="text-center text-xs">{game.name}</h1>
          <div className="flex text-[.6rem] font-thin justify-between items-start pb-2 text-[#e2e2e2]">
            <p>Release: {game.released}</p>
            <div className="flex gap-x-1 items-center justify-around ">
              <ThumbUpIcon className="h-4 text-green-600 -translate-y-[.1rem]"/>

              <p>{game.rating}</p>
            </div>
          </div>
        </div>
  </div>
  );
};

export default GameCard;
