
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../src/App.jsx'
import store from '../src/store/store.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*import React from 'react'
import ReactDOM from 'react-dom/client';
import App from '../src/App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
