import React, {Component, Fragment} from 'react';
import {WeatherType} from './weatherType';
import {CURRENT, HOURLY, DAYS} from '../constants/constants';
import {CurrentWeather} from './currentWeather';
import {HourlyWeather} from './hourlyWeather';
import {DaysWeather} from './daysWeather';
import FavouriteButton from './favouriteButton';
import {IForecastState} from './forecast';

export interface IWeatherProps extends IForecastState {
   onToggleFavourite: (city: string) => void;
}

export interface IWeatherState {
   city: string;
   type: string;
 }

class Weather extends Component<IWeatherProps, IWeatherState> {

   constructor(props: IWeatherProps) {
      super(props);
      this.state = {
         city: props.city,
         type: CURRENT
      };
      this.onTypeChange = this.onTypeChange.bind(this);
      this.renderWeatherByType = this.renderWeatherByType.bind(this);
   }

   componentDidUpdate() {
      const { city } = this.props;
      if (city !== this.state.city) {
         this.setState({city, type: CURRENT});
      }
   }

   onTypeChange(type: string) {
      this.setState({type});
   }

   renderWeatherByType () {
      const { city, type } = this.state;
      switch(type) {
         case CURRENT: return <CurrentWeather>{city}</CurrentWeather>;
         case HOURLY: return <HourlyWeather>{city}</HourlyWeather>;
         case DAYS: return <DaysWeather>{city}</DaysWeather>;
         default: return null;
      };
   }

   render() {
      const { city, type } = this.state;
      return  (city && city.length > 0 
         ? <Fragment>
            <FavouriteButton {...this.props} {...this.state}/>
            <WeatherType onTypeChange={this.onTypeChange}>{type}</WeatherType>
            {this.renderWeatherByType()}
            </Fragment> 
            : <Fragment><h1>No city is selected. Search for a city please.</h1></Fragment>
         );
   }
}

export default Weather;