import React, {FC, Fragment} from 'react';
import {CURRENT, HOURLY, DAYS} from '../constants/constants';
import {WeatherTypeItem} from './weatherTypeItem';

interface IWeatherTypeProps {
  onTypeChange: (type: string) => void;
  children: string;
}

export const WeatherType: FC<IWeatherTypeProps> = props => {
  const { children: type, onTypeChange } = props;
   const onRadioChange = (e: any) => {
      onTypeChange(e.target.value);
    }

   return (
      <Fragment>
        <ul style={{paddingLeft: "0px"}}>
          <WeatherTypeItem value={CURRENT}
            checked={type === CURRENT}
            onChange={onRadioChange}
          />
          <WeatherTypeItem value={HOURLY}
            checked={type === HOURLY}
            onChange={onRadioChange}
          />
          <WeatherTypeItem value={DAYS}
            checked={type === DAYS}
            onChange={onRadioChange}
          />
        </ul>
        </Fragment>
    );
};
