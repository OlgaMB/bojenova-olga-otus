import React, { Component, MouseEvent } from 'react';
import { IProps } from './forecast';
import { selectCity, selectType, getCurrent } from '../actions/actions';
import { CURRENT } from '../constants/constants';

class Favourites extends Component<IProps> {
      constructor(props: IProps) {
            super(props);
            this.onClick = this.onClick.bind(this);
      }

      onClick (event: MouseEvent<HTMLButtonElement, MouseEvent>) {
            const { dispatch } = this.props;
            const city = event.target.textContent;
            dispatch(selectCity(city));
            dispatch(selectType(CURRENT));
            dispatch(getCurrent(city));
      }

      render () {
            const { favourites } = this.props;
            return <div style={ {marginBottom: "10px"} }>
                  <span style={ {fontWeight: "bold"} }>Favourites</span>
                  {  favourites.map(city => {
                        return <button 
                                    key={ city } 
                                    style={ {marginLeft: "10px"} } 
                                    onClick={ this.onClick }
                              >{ city }</button>;
                        } )}
                  </div>;
      }
}
   
export default Favourites;