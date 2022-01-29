import { ArrowSmDownIcon } from '@heroicons/react/outline';
import GameCard from './GameCard';


const Game = () => {



  return (
  <div className="px-5 md:px-24 mt-10 py-10 ">

          <h1 className="font-semibold text-base">Action</h1>


      <div className="flex  gap-5 overflow-x-scroll pb-5">
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>


      </div>

  </div>
  );
};

export default Game;
