import React, { FunctionComponent, Fragment } from 'react';
import { CURRENT, HOURLY, DAYS } from '../constants/constants';
import { WeatherTypeItem } from './weatherTypeItem';
import { selectType } from '../actions/actions';
import { IProps } from './forecast';
import { getCurrent, getHourly, getDays } from '../actions/actions';


export const WeatherType: FunctionComponent<IProps> = props => {
  const { type, dispatch } = props;
  
  const onRadioChange = (e: any) => {
    const type = e.target.value;
    const { city, dispatch } = props;
    dispatch(selectType(type));
    switch(type) {
      case CURRENT: dispatch(getCurrent(city)); break;
      case HOURLY: dispatch(getHourly(city)); break;
      case DAYS: dispatch(getDays(city)); break;
    };
  }

  return (
    <Fragment>
      <ul style={ {paddingLeft: "0px"} }>
        <WeatherTypeItem value={ CURRENT }
          checked={ type === CURRENT }
          onChange={ onRadioChange }
        />
        <WeatherTypeItem value={ HOURLY }
          checked={ type === HOURLY }
          onChange={ onRadioChange }
        />
        <WeatherTypeItem value={ DAYS }
          checked={ type === DAYS }
          onChange={ onRadioChange }
        />
      </ul>
    </Fragment>
  );
};
