/**
  * @file      Renders the app
  * @author    Luke Boyle
  * @version   1.0.0
  * @since     1.0.0
*/

/* 
==============================================================
  DEPENDENCIES and VARIABLES
============================================================== 
*/

// React Dependencies
import React              from 'react';
import ReactDOM           from 'react-dom/client';
import reportWebVitals    from './reportWebVitals';
import { BrowserRouter }  from 'react-router-dom';

import App                from './app/App';

// CSS
import './index.scss';

// Create Root
const root = ReactDOM.createRoot(document.getElementById('root'));

/* 
==============================================================
  APP
============================================================== 
*/

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* 
==============================================================
  WEB VITAL METRICS
============================================================== 
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  END OF FILE
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/