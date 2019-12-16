import React, {Component, Fragment, FC} from 'react';
import { IProps } from './forecast';

export const RenderWeather = (WrappedComponent: FC<IProps>) =>
  class WeatherData extends Component<IProps> {
    render() {
      return <Fragment><WrappedComponent { ...this.props }/></Fragment>;
    }
  };