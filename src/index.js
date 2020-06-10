import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Imports needed for redux

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

// Here we are creating our redux store

const store = createStore(rootReducer)


ReactDOM.render(
  <React.StrictMode>
    {/* We must wrap our App in the Provider and pass `store` down as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
