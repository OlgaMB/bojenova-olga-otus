import React, { Fragment, FC } from 'react';
import { RenderWeather } from './renderWeather';
import { TableRow } from './tableRow';
import { IProps } from './forecast';
import { HOURLY } from '../constants/constants';

const hourlyWeather: FC<IProps> = props  => {
    const renderWeather = () =>{
        const {
            list,
            city: { name }
        } = props.data;

        return (
            <Fragment>
                <table>
                    <tbody>
                        <TableRow data={ [name] }>City</TableRow>
                        <TableRow data={ list.map((data: any) => data.dt_txt) }>Time</TableRow>
                        <TableRow data={ list.map((data: any) => data.main.temp) }>Temperature</TableRow>
                        <TableRow data={ list.map((data: any) => data.main.pressure) }>Pressure</TableRow>
                        <TableRow data={ list.map((data: any) => data.main.humidity) }>Humidity</TableRow>
                        <TableRow data={ list.map((data: any) => data.main.temp_min) }>Temperature(min)</TableRow>
                        <TableRow data={ list.map((data: any) => data.main.temp_max) }>Temperature(max)</TableRow>
                        <TableRow data={ list.map((data: any) => data.wind.speed) }>Wind</TableRow>
                 </tbody>
              </table>
      </Fragment>
         );  
    }

    return  props.type === HOURLY && props.data ? renderWeather() : null;
   
};

export const HourlyWeather = RenderWeather(hourlyWeather);
