import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/App';
import 'spectre.css/dist/spectre.min.css';
import './style.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
