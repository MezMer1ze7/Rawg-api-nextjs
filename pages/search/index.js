import React from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query'
import GameCard from '../../components/GameCard'
import axios from 'axios'



const SearchResult = () => {
  const router = useRouter()
  const searchQuery =router?.query.s

  // const fetchSearchResult = async(page=1)=>{
  //   const {data} = await axios.get(`https://api.rawg.io/api/games?key=23096131fca44f378b2ba7d779ad1705&page=${page}&search=${searchQuery}`)
  //   return {data, nextPage: page + 1}
  // }
  
  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery(['games',searchQuery], ({pageParam =1})=>fetchSearchResult(pageParam), {
  //   getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  // })
  
  

  return (
    <div className="px-5 md:px-24">
        <h1 className="text-xl font-semibold ">Search Results</h1>
        <div className="grid grid-cols-2 md:flex flex-wrap gap-10 ">
                {/* {data?.pages?.map((data)=>data?.data?.results?.map((game)=>(
                    <SearchResultCard key={game?.id} {...game}/>
                )))} */}
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

export default SearchResult;

