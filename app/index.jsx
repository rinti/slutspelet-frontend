import React from 'react';
import ReactDOM from 'react-dom';
import Appartment from './components/Appartment';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Appartment />,
  document.getElementById('app')
);
