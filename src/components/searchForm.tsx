import React, {Component} from 'react';
import { IProps } from './forecast';
import { selectCity, selectType, getCurrent } from '../actions/actions';
import { CURRENT } from '../constants/constants';

interface ISearchFormState {
  city: string;
}

class SearchForm extends Component<IProps, ISearchFormState> {
  
  constructor(props: IProps) {
    super(props);
    this.state = { city: props.city };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event: any) {
    const { dispatch } = this.props;
    const { city } = this.state;
    
    event.preventDefault();
    dispatch(selectCity(city));
    dispatch(selectType(CURRENT));
    dispatch(getCurrent(city));
  }

    render() {
      const { city } = this.state;
      return (
        <form onSubmit={ this.handleSubmit }>
          <label>
            City:
            <input type="text" value={ city } onChange={ this.handleChange } />
          </label>
          <input type="submit" value="Search" />
        </form>
      );
    }
   }

   export default SearchForm;