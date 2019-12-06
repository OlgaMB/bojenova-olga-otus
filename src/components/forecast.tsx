import React, {Component, Fragment} from 'react';
import {Favourites} from './favourites';
import SearchForm from './searchForm';
import Weather from './weather';

interface IForecastProps {}

export interface IForecastState {
    city: string;
    favourites: Array<string>;
}

class Forecast extends Component<IForecastProps, IForecastState> {
    constructor (props: IForecastProps) {
        super(props);
        this.state = {
            city: 'Minsk',
            favourites: []
          };
        this.onSearch = this.onSearch.bind(this);
        this.onToggleFavourite = this.onToggleFavourite.bind(this);
        this.showFavourite = this.showFavourite.bind(this);
    }

    onSearch (city: string) {
        this.setState({city});
    }

    onToggleFavourite(city: string) {
        const { favourites } = this.state;
        if (!favourites.includes(city)) {
            favourites.push(city); 
            this.setState({favourites});
        } else {
            this.setState({favourites: favourites.filter(item => item !== city)});  
        }
    }

    showFavourite(event:any) {
        event.target.textContent && this.setState({city: event.target.textContent});
    }

    render() {
     return (
        <Fragment>
            <Favourites showFavourite={this.showFavourite} {...this.state}/>
            <SearchForm onSearch={this.onSearch} {...this.state}/>
            <Weather onToggleFavourite={this.onToggleFavourite} {...this.state}/>
        </Fragment>
       );
    }
   }

export default Forecast;