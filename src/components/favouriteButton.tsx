import React, { Component } from 'react';
import { IProps } from './forecast';
import { toggleFavourite } from '../actions/actions';

class FavouriteButton extends Component<IProps> {
    constructor(props: IProps) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.isFavourite = this.isFavourite.bind(this);
    }
 
    isFavourite (city: string) {
      const { favourites } = this.props;
      return favourites.includes(city);
   }
  
    handleClick () {
      const { city, dispatch } = this.props;
      dispatch(toggleFavourite(city));
    }
  
    render () {
      const { city } = this.props;
      return (
        <div style={ {paddingTop: "20px"} }>
            <span style={ {fontWeight: "bold"} }>{ `Weather forecast for ${ city }` }</span>
            <button style={ {marginLeft: "10px"} } onClick={ this.handleClick }>
            { this.isFavourite(city) ? `Remove ${ city } from Favourites` : `Add ${ city } to Favourites` }
            </button>
        </div>
      );
    }
}

export default FavouriteButton;