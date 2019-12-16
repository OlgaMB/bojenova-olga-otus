import React, { FunctionComponent } from 'react';
import { NAMES } from '../constants/constants';

interface IWeatherTypeItemProps {
    value: string;
    checked: boolean;
    onChange: (event: any)=>void;
}

export const WeatherTypeItem: FunctionComponent<IWeatherTypeItemProps> = props => <li style={{display: "inline-block"}}>
            <label>
                <input type="radio" { ...props }/>
                <span>{ NAMES[props.value] }</span>
            </label>
        </li>;
 