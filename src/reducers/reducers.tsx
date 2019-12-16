import { combineReducers } from 'redux';
import { 
  SELECT_CITY, 
  SELECT_TYPE, 
  TOGGLE_FAVOURITES, 
  GET_CURRENT, 
  GET_HOURLY, 
  GET_DAYS } from '../actions/actions';
import { CURRENT } from '../constants/constants';
import { getCurrent, getHourly, getDays } from '../api/apiMock';

export interface IStates {
  city?: string;
  type?: string;
  favourites?: Array<string>;
  data?: any;
}

export interface IActions {
  type: string;
  city: string;
  kind?: string;
}
  
  const selectedCity = (state: IStates = {}, action: IActions) => {
    switch (action.type) {
      case SELECT_CITY:
        return {city: action.city, type: state.type};
      case SELECT_TYPE:
          return {city: state.city, type: action.kind};
      default:
        return {city: state.city || 'Minsk', type: state.type || CURRENT};
    }
  }

  export const favourites = (state: IStates = {}, action: IActions) => {
    switch (action.type) {
      case TOGGLE_FAVOURITES: {
        const { favourites } = state;
        let newFavourites:string[] = [];
        if (favourites) {
          if (!favourites.includes(action.city)) {
            newFavourites = favourites.slice(0);
            newFavourites.push(action.city); 
          } else {
            newFavourites = favourites.filter(item => item !== action.city);  
          }
        } 
        return {favourites: newFavourites};
      }  
      default:
        return {favourites: state.favourites || []};
    }
  }

  const data = (state: IStates = {}, action: IActions) => {
    switch (action.type) {
      case GET_CURRENT:
        return getCurrent(action.city);
      case GET_HOURLY:
          return getHourly(action.city);
      case GET_DAYS:
        return getDays(action.city);
      default:
        return Object.keys(state).length ? { ...state } : getCurrent(action.city);
    }
  }

  const rootReducer = combineReducers({
    selectedCity,
    favourites,
    data
  })
  
  export default rootReducer;
  
