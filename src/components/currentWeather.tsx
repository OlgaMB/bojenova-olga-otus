import React, {Fragment, FC} from 'react';
import {IWrappedComponentProps, RenderWeather} from './renderWeather';
import {TableRow} from './tableRow';
import {getCurrent} from '../api/apiMock';


const currentWeather: FC<IWrappedComponentProps> = props  => {
    const renderWeather = () =>{
        const {
            main: {
                temp, pressure, humidity, temp_min, temp_max
            }, 
            visibility, 
            wind: {speed}, 
            name
        } = props.children;

        return (
            <Fragment>
                <table>
                    <tbody>
                        <TableRow data={[name]}>City</TableRow>
                        <TableRow data={[temp]}>Temperature</TableRow>
                        <TableRow data={[pressure]}>Pressure</TableRow>
                        <TableRow data={[humidity]}>Humidity</TableRow>
                        <TableRow data={[temp_min]}>Temperature(min)</TableRow>
                        <TableRow data={[temp_max]}>Temperature(max)</TableRow>
                        <TableRow data={[visibility]}>Visibility</TableRow>
                        <TableRow data={[speed]}>Wind</TableRow>
                 </tbody>
              </table>
            </Fragment>
         );  
    }
    return  props.children ? renderWeather() : null;
   
};

export const CurrentWeather = RenderWeather(currentWeather, getCurrent);
