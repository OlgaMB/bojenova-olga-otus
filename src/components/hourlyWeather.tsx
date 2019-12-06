import React, {Fragment, FC} from 'react';
import {RenderWeather, IWrappedComponentProps} from './renderWeather';
import {TableRow} from './tableRow';
import {getHourly} from '../api/apiMock';

const hourlyWeather: FC<IWrappedComponentProps> = props  => {
    const renderWeather = () =>{
        const {
            list,
            city: {name}
        } = props.children;

        return (
            <Fragment>
                <table>
                    <tbody>
                        <TableRow data={[name]}>City</TableRow>
                        <TableRow data={list.map(data => data.dt_txt)}>Time</TableRow>
                        <TableRow data={list.map(data => data.main.temp)}>Temperature</TableRow>
                        <TableRow data={list.map(data => data.main.pressure)}>Pressure</TableRow>
                        <TableRow data={list.map(data => data.main.humidity)}>Humidity</TableRow>
                        <TableRow data={list.map(data => data.main.temp_min)}>Temperature(min)</TableRow>
                        <TableRow data={list.map(data => data.main.temp_max)}>Temperature(max)</TableRow>
                        <TableRow data={list.map(data => data.wind.speed)}>Wind</TableRow>
                 </tbody>
              </table>
      </Fragment>
         );  
    }

    return  props.children ? renderWeather() : null;
   
};

export const HourlyWeather = RenderWeather(hourlyWeather, getHourly);
