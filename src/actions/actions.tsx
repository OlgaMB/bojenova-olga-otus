export const SELECT_CITY = 'SELECT_CITY';
export const SELECT_TYPE = 'SELECT_TYPE';
export const TOGGLE_FAVOURITES = 'TOGGLE_FAVOURITES';
export const GET_CURRENT = 'GET_CURRENT';
export const GET_HOURLY = 'GET_HOURLY';
export const GET_DAYS = 'GET_DAYS';

export const selectCity = (city: string) => ({ type: SELECT_CITY, city });
export const selectType = (type: string) => ({ type: SELECT_TYPE, kind: type });
export const toggleFavourite = (city: string) => ({ type: TOGGLE_FAVOURITES, city });
export const getHourly = (city: string) => ({ type: GET_HOURLY, city });
export const getDays = (city: string) => ({ type: GET_DAYS, city });
export const getCurrent = (city: string) => ({ type: GET_CURRENT, city });
