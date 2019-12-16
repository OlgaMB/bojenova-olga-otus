import React from 'react';
import { render } from 'react-dom';
import Forecast from './components/forecast';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';

const middleware = [ thunk ];
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );

render(<Provider store={ store }><Forecast/></Provider>, document.getElementById('root'));