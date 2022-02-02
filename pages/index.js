
import EventSection from "../components/EventSection"
import Game from "../components/Game"

import GameStores from "../components/GameStores"
import HeroSection from "../components/HeroSection"





const Home = ()=>{



  return(
    <div>
        <HeroSection/>
        <EventSection/>
        <GameStores/>
        <Game genre={'action'}/>
        <Game genre={'strategy'}/>
        <Game genre={'adventure'}/>
        <Game genre={'indie'}/>
        <Game genre={'shooter'}/>
        <Game genre={'fighting'}/>
        <Game genre={'arcade'}/>
        <Game genre={'racing'}/>
        <Game genre={'sports'}/>
        <Game genre={'card'}/>
    </div>
  )
}

export default Home