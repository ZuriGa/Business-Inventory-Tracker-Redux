import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { createStore } from 'redux'
import reducer from './reducers/inventory-list-reducer';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


