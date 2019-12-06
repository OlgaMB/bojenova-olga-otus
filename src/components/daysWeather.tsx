import React, {Fragment, FC} from 'react';
import {RenderWeather, IWrappedComponentProps} from './renderWeather';
import {TableRow} from './tableRow';
import {getDays} from '../api/apiMock';

const daysWeather: FC<IWrappedComponentProps> = props  => {
    const renderWeather = () =>{
        const {
            list,
            city: {name}
        } = props.children;

        const dates = () => {
            const date = new Date();
            return list.map(data => {
                date.setDate(date.getDate() + 1);
                return `${date.getDate().toLocaleString()}.${date.getMonth().toLocaleString()}`;
            });
        };
       
        return (
            <Fragment>
                <table>
                    <tbody>
                        <TableRow data={[name]}>City</TableRow>
                        <TableRow data={dates()}>Date</TableRow>
                        <TableRow data={list.map(data => data.temp.morn)}>Temperature(morning)</TableRow>
                        <TableRow data={list.map(data => data.temp.day)}>Temperature(day)</TableRow>
                        <TableRow data={list.map(data => data.temp.eve)}>Temperature(evening)</TableRow>
                        <TableRow data={list.map(data => data.temp.night)}>Temperature(night)</TableRow>
                        <TableRow data={list.map(data => data.pressure)}>Pressure</TableRow>
                        <TableRow data={list.map(data => data.humidity)}>Humidity</TableRow>
                        <TableRow data={list.map(data => data.speed)}>Wind</TableRow>
                    </tbody>
                </table>
            </Fragment>
         );  
    }

    return  props.children ? renderWeather() : null;
};

export const DaysWeather = RenderWeather(daysWeather, getDays);
