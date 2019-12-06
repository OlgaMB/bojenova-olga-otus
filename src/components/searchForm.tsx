import React, {Component} from 'react';
import {IForecastState} from './forecast';

interface ISearchFormProps extends IForecastState {
  onSearch: (city: string) => void;
}

interface ISearchFormState {
  city: string;
}

class SearchForm extends Component<ISearchFormProps, ISearchFormState> {
  
    constructor(props: ISearchFormProps) {
    super(props);
    this.state = {
      city: props.city
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({city: event.target.value});
  }

  handleSubmit(event: any) {
    event.preventDefault();
    this.props.onSearch(this.state.city);
  }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              City:
              <input type="text" value={this.state.city} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Search" />
          </form>
        );
      }
   }

   export default SearchForm;