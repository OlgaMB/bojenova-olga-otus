import React, {Component} from 'react';
import {IWeatherProps, IWeatherState} from './weather';

interface IFavouriteButtonState {
  city: string;
  isToggleOn: boolean;
};

class FavouriteButton extends Component<IWeatherProps & IWeatherState, IFavouriteButtonState> {
    constructor(props: IWeatherProps & IWeatherState) {
      super(props);
      const { city } = props;
      this.state = {isToggleOn: this.isFavourite(city), city};
      this.handleClick = this.handleClick.bind(this);
    }
 
    componentDidUpdate() {
      const { city } = this.props;
        if (city !== this.state.city) {
            this.setState({city, isToggleOn: this.isFavourite(city)});
        }
    }

    isFavourite (city: string) {
      return this.props.favourites.includes(city);
   }
  
    handleClick() {
      const { city, isToggleOn } = this.state;
      this.setState({isToggleOn: !isToggleOn});
      this.props.onToggleFavourite(city);
    }
  
    render() {
      const { city, isToggleOn } = this.state;
      return (
        <div style={{paddingTop: "20px"}}>
            <span style={{fontWeight: "bold"}}>{`Weather forecast for ${city}`}</span>
            <button style={{marginLeft: "10px"}} onClick={this.handleClick}>
            {isToggleOn ? `Remove ${city} from Favourites` : `Add ${city} to Favourites`}
            </button>
        </div>
      );
    }
}

export default FavouriteButton;