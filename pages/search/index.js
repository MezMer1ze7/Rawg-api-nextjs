import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import gsap, { Power1 } from "gsap";
import SearchCard from "../../components/SearchCard";
import { Oval } from "react-loader-spinner";

const SearchResult = () => {
  const router = useRouter();
  const searchQuery = router?.query.s;

  const resultsTl = gsap.timeline();
  const resultsRef = useRef();

  const fetchSearchResult = async (page = 1) => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=23096131fca44f378b2ba7d779ad1705&page=${page}&search=${searchQuery}&search_precise=true`
    );
    return { data, nextPage: page + 1 };
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ["games", searchQuery],
    ({ pageParam = 1 }) => fetchSearchResult(pageParam),
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    }
  );
  const nextAvailable = data?.pages?.map(data=>data.data.next)[0]

  useEffect(() => {
    resultsTl.to(resultsRef?.current?.children, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: Power1.easeIn,
    });
  }, [resultsTl]);

  if (status === "loading")
    return (
      <div className="h-screen flex items-center justify-center  ">
        <Oval heigth="100" width="100" color="grey" ariaLabel="loading" />
      </div>
    );

  if (data.pages.map((data) => data.data.count) == 0)
    return (
      <div className="h-screen flex items-center justify-center  ">
        <h1 className="text-[10vw]">Sadge</h1>
      </div>
    );



  return (
    <div className="px-5 md:px-24">
      <h1 className="text-xl font-semibold ">Search Results</h1>

      <div
        ref={resultsRef}
        className="grid grid-cols-2 md:flex flex-wrap gap-10 "
      >
        {data?.pages?.map((data) =>
          data?.data?.results?.map((game) => (
            <SearchCard key={game?.id} game={game} />
          ))
        )}
      </div>
      <div className="h-20 flex items-center justify-center my-10 ">
        {isFetchingNextPage ? (
          <div >
            <Oval heigth="100" width="100" color="grey" ariaLabel="loading" />
          </div>
        ) : (
            <button onClick={fetchNextPage} disabled={!nextAvailable} className="rounded bg-[#383838] px-2 active:scale-90">{nextAvailable === null?'Nope': 'Load More'}</button>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
