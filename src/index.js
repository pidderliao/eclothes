import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './style/reset.css'
import App from './App'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import logger from 'redux-logger';

// store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
