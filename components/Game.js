import axios from "axios";
import { useInfiniteQuery } from "react-query";
import GameCard from "./GameCard";
import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

import { Oval } from "react-loader-spinner";

const Game = ({ genre = "action" }) => {


  const fetchSearchResult = async (page = 1) => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=23096131fca44f378b2ba7d779ad1705&page=${page}&genres=${genre}`
    );
    return { data, nextPage: page + 1 };
  };
  const gameRef = useRef();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ["games", genre],
    ({ pageParam = 1 }) => fetchSearchResult(pageParam),
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    }
  );

  useEffect(() => {

    gameRef.current.addEventListener("scroll", () => {
      if (
        gameRef.current.scrollLeft + gameRef.current.clientWidth >=
        gameRef.current.scrollWidth - 50
      ) {
        fetchNextPage()
      }
    });
  }, []);

  return (
    <div className="px-5 md:px-24 mt-10 py-10 ">
      <h1 className="font-semibold text-base capitalize py-1">{genre}</h1>
   
      <div ref={gameRef} className="flex  gap-5 overflow-x-scroll pb-5">
      {status === 'loading' &&
      <div className="w-full h-40 flex items-center justify-center">
          <Oval heigth="100" width="100" color="grey" ariaLabel="loading" />
      </div>
      }
        {data?.pages?.map((data) =>
          data?.data?.results?.map((game) => (
            <GameCard key={game?.id} game={game} />
          ))
        )}
        {isFetchingNextPage &&
        <div className="min-w-[10rem] flex items-center justify-center  ">
          <Oval heigth="100" width="100" color="grey" ariaLabel="loading" />
        </div>
        }
        {error &&
        <div className="h-40 w-full flex items-center justify-center  ">
          <h1>Oops!! Sorry</h1>
        </div>
      }
    
      </div>
    </div>
  );
};

export default Game;
