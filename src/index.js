import React, {Component} from 'react';
import { render } from 'react-dom';
import { Container } from './container';

class Hello extends Component {

 render() {
  return (
       <div>
          <h1>Hello World (jsx)!</h1>
       </div>
    );
 }
}

render(<div><Hello/><Container>Hello World (tsx)!</Container></div>, document.getElementById('root'));