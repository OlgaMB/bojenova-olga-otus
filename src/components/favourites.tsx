import React, {FC} from 'react';
import {IForecastState} from './forecast';

interface IFavouritesProps extends IForecastState {
      showFavourite: (event: any) => void;
  }

export const Favourites: FC<IFavouritesProps> = props => {
      const { favourites, showFavourite } = props;
   return <div style={{marginBottom: "10px"}}>
         <span style={{fontWeight: "bold"}}>Favourites</span>
         {favourites.map(city => <button key={city} style={{marginLeft: "10px"}} onClick={showFavourite}>{city}</button>)}
      </div>;
}