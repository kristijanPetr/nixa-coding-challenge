import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactRouter from './router';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
console.warn = () => {};
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ReactRouter />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
