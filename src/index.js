import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { loadProfiles } from './actions';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const store = configureStore();
store.dispatch(loadProfiles());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
