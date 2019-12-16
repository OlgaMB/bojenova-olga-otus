import React, { Component, Fragment } from 'react';
import { WeatherType } from './weatherType';
import { CURRENT, HOURLY, DAYS } from '../constants/constants';
import { CurrentWeather } from './currentWeather';
import { HourlyWeather } from './hourlyWeather';
import { DaysWeather } from './daysWeather';
import FavouriteButton from './favouriteButton';
import { IProps } from './forecast';

class Weather extends Component<IProps> {
   constructor(props: IProps) {
      super(props);
      this.renderWeatherByType = this.renderWeatherByType.bind(this);
   }

   renderWeatherByType () {
      const { city, type } = this.props;
      switch(type) {
         case CURRENT: return <CurrentWeather { ...this.props }/>;
         case HOURLY: return <HourlyWeather { ...this.props }>{ city }</HourlyWeather>;
         case DAYS: return <DaysWeather { ...this.props }>{ city }</DaysWeather>;
         default: return null;
      };
   }

   render () {
      const { city } = this.props;
      return  (city && city.length > 0 
         ? <Fragment>
               <FavouriteButton { ...this.props }/>
               <WeatherType { ...this.props }/>
               { this.renderWeatherByType() }
            </Fragment> 
         : <Fragment><h1>No city is selected. Search for a city please.</h1></Fragment>
         );
   }
}

export default Weather;