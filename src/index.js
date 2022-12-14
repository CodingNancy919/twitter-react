import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './containers/Register';
import Login from './containers/Login';
import reportWebVitals from './reportWebVitals';

//document.getElementById('root').appendChild(<App>))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
