import React, {Component, Fragment, FC} from 'react';

export interface IWrappedComponentProps {
  children?: any;
}

interface IWeatherDataProps {
  children: string;
 }

interface IWeatherDataState {
  city: string;
  data?: any;
}

export const RenderWeather = (WrappedComponent: FC<IWrappedComponentProps>, dataApi: (city: string) => JSON) =>
  class WeatherData extends Component<IWeatherDataProps, IWeatherDataState> {
    constructor(props: IWeatherDataProps) {
      super(props);
      this.state = {
          city: ''
      };
    }
  
    componentDidMount() {
      const { children: city } = this.props;
      this.setState({
          city,
          data: dataApi(city)
      });
    }

    componentDidUpdate() {
      const { children: city } = this.props;
      if (city !== this.state.city) {
          this.setState({
            city,
            data: dataApi(city)
        });
      }
    }
  
    render() {
      return <Fragment><WrappedComponent>{this.state.data}</WrappedComponent></Fragment>;
    }
  };