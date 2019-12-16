import React, { Fragment, FC } from 'react';
import { RenderWeather } from './renderWeather';
import { TableRow } from './tableRow';
import { IProps } from './forecast';
import { CURRENT } from '../constants/constants';

const currentWeather: FC<IProps> = props  => {
    const renderWeather = () =>{
        const {
            main: {
                temp, pressure, humidity, temp_min, temp_max
            }, 
            visibility, 
            wind: {speed}, 
            name
        } = props.data;

        return (
            <Fragment>
                <table>
                    <tbody>
                        <TableRow data={ [name] }>City</TableRow>
                        <TableRow data={ [temp] }>Temperature</TableRow>
                        <TableRow data={ [pressure] }>Pressure</TableRow>
                        <TableRow data={ [humidity] }>Humidity</TableRow>
                        <TableRow data={ [temp_min] }>Temperature(min)</TableRow>
                        <TableRow data={ [temp_max] }>Temperature(max)</TableRow>
                        <TableRow data={ [visibility] }>Visibility</TableRow>
                        <TableRow data={ [speed] }>Wind</TableRow>
                 </tbody>
              </table>
            </Fragment>
         );  
    }
    return  props.type === CURRENT && props.data  ? renderWeather() : null;
   
};

export const CurrentWeather = RenderWeather(currentWeather);
