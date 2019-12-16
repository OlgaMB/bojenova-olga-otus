import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Favourites from './favourites';
import SearchForm from './searchForm';
import Weather from './weather';

export interface IProps {
    city: string;
    type: string;
    favourites: Array<string>;
    data: any;
    dispatch: any;
}

interface IStates  {
    selectedCity: any;
    favourites: any; 
    data: any;
  }

class Forecast extends Component<IProps> {
    constructor (props: IProps) {
        super(props);
        this.showFavourite = this.showFavourite.bind(this);
    }

    showFavourite(event:any) {
        event.target.textContent && this.setState({city: event.target.textContent});
    }

    render() {
     return (
        <Fragment>
            <Favourites {...this.props}/>
            <SearchForm {...this.props}/>
            <Weather {...this.props}/>
        </Fragment>
       );
    }
   }

function mapStateToProps (state: IStates, ownProps={}) {
    const { selectedCity, favourites, data } = state;
    return { 
        city: selectedCity.city, 
        type: selectedCity.type, 
        favourites: favourites.favourites, 
        data};
}

export default connect(mapStateToProps)(Forecast);