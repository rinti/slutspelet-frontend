import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Appartment from './components/Appartment';
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appartmentReducer from './reducers/appartment';
import { Provider } from 'react-redux';
import { loadAppartment } from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appartmentReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(loadAppartment);

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Provider store={store}>
    <Appartment />
  </Provider>,
  document.getElementById('app')
);
