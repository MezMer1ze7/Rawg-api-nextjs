import {useState} from 'react';
import {SearchIcon} from '@heroicons/react/outline'
import { useRouter } from 'next/router';


const SearchForm = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const searchQuery = router.query.s



  const handleSearch = (e)=>{
    e.preventDefault()
    router.push({pathname:'search', query:{s:search}})

    setSearch('')
  }



  
  return (
  <>

  <form  className="bg-[#C4C4C4] flex rounded-full grow-[0.55] " onSubmit={(e)=>handleSearch(e)}>

      <input value={search} onChange={e=>setSearch(e.target.value)} type="text" className="outline-none bg-white rounded  px-2 text-xs md:text-base bg-opacity-0 grow text-black" placeholder={searchQuery? searchQuery:"Search a sheesh game"}/>
      <button>
          <SearchIcon className="h-4 md:h-5 px-1 text-black"/>
      </button>
  </form>
  </>
  );
};

export default SearchForm;
