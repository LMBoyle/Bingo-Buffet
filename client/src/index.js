/**
 * @description   Renders the App
 * @author        Luke Boyle
 * @since         23 Jun 2022
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 23 Jun 2022  | IMPORTS/DEPENDENCIES       | Created
 * Luke B | 23 Jun 2022  | GLOBAL VARIABLES           | Created
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// IMPORTS/DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// React Dependencies
import React              from 'react';
import ReactDOM           from 'react-dom/client';
import reportWebVitals    from './reportWebVitals';
import { BrowserRouter }  from 'react-router-dom';

import App                from './app/App';

// CSS
import './index.scss';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// GLOBAL VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // Get the Root
  const container = document.getElementById('root');
  // Create Root
  const root = ReactDOM.createRoot(container);

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// APP
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// WEB VITAL METRICS
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx