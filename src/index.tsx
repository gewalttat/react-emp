import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createStore from './redux/configureStore';
import App from './App';

const store = createStore();

ReactDOM.hydrate(
  <App Router={BrowserRouter} store={store} />,
        document.getElementById('root')
      );
