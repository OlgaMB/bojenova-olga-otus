import React, { Fragment, FC } from 'react';
import { RenderWeather } from './renderWeather';
import { TableRow } from './tableRow';
import { IProps } from './forecast';
import { DAYS } from '../constants/constants';

const daysWeather: FC<IProps> = props  => {
    const renderWeather = () =>{
        const {
            list,
            city: { name }
        } = props.data;

        const dates = () => {
            const date = new Date();
            return list.map((data: any) => {
                date.setDate(date.getDate() + 1);
                return `${ date.getDate().toLocaleString() }.${ date.getMonth().toLocaleString() }`;
            });
        };
       
        return (
            <Fragment>
                <table>
                    <tbody>
                        <TableRow data={ [name] }>City</TableRow>
                        <TableRow data={ dates() }>Date</TableRow>
                        <TableRow data={ list.map((data: any) => data.temp.morn) }>Temperature(morning)</TableRow>
                        <TableRow data={ list.map((data: any) => data.temp.day) }>Temperature(day)</TableRow>
                        <TableRow data={ list.map((data: any) => data.temp.eve) }>Temperature(evening)</TableRow>
                        <TableRow data={ list.map((data: any) => data.temp.night) }>Temperature(night)</TableRow>
                        <TableRow data={ list.map((data: any) => data.pressure) }>Pressure</TableRow>
                        <TableRow data={ list.map((data: any) => data.humidity) }>Humidity</TableRow>
                        <TableRow data={ list.map((data: any) => data.speed) }>Wind</TableRow>
                    </tbody>
                </table>
            </Fragment>
         );  
    }

    return  props.type === DAYS && props.data ? renderWeather() : null;
};

export const DaysWeather = RenderWeather(daysWeather);
