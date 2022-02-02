import Image from 'next/image';
import React from 'react';

import axios from 'axios'
import GameDetails from '../components/GameDetails';


const Details = ({gameDetail, screenShot}) => {

  return (
  <div className="overflow-x-hidden">
      <GameDetails details={gameDetail} screenShot={screenShot}/>

  </div>

  );
};

export default Details;

export const getServerSideProps = async ({query}) =>{

    const clickedId = query.game_id
    const {data: gameDetail} = await axios.get(`https://api.rawg.io/api/games/${clickedId}?key=23096131fca44f378b2ba7d779ad1705`)
    const {data: screenShot} = await axios.get(`https://api.rawg.io/api/games/${clickedId}/screenshots?key=23096131fca44f378b2ba7d779ad1705`)


    return{
        props:{
            gameDetail,
            screenShot,
        }
    }
}