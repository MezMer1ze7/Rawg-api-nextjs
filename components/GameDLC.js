import React from 'react';

const GameDLC = ({downloadable}) => {
  return (
      <div>
          <h1>DLC</h1>
          <div>
            {downloadable?.results.map(dlc=><h1 key={dlc.id}>{dlc.name}</h1>)}
          </div>
      </div>
  );
};

export default GameDLC;
