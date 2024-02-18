/**
  * @file      Renders the app
  * @author    Luke Boyle
  * @since     23 Jun 2023
  * 
  * Dev Log 
  * ----------------------------------------------------------------
  * Who    | When         | What                       | Why
  * ----------------------------------------------------------------
  * Luke B | 23 Jun 2022 | DEPENDENCIES and VARIABLES  | Created
  * Luke B | 23 Jun 2022 | COMPONENT                   | Created
  * Luke B | 23 Jun 2022 | EXPORT                      | Created
  * Luke B | 17 Feb 2024 | ROUTES                      | Updated to point to routes folder
  * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES and VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  import './App.scss';

  // React Dependencies
  import React, { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  // Import containers
  import Homepage from '../containers/Homepage';
  import Board from '../containers/Board';

  // Import components
  import Navbar   from '../components/layout/Navbar/Navbar';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const APP = () => {
    return (
      <Router>
        <div className="App">
          {/* Navbar */}
          {/* <Navbar /> */}

          {/* Routes */}
          <Routes>
            {/* Home */}
            <Route 
              path="/" 
              exact 
              element={ 
                <Homepage /> 
              } 
            />

            {/* Catch all */}
            <Route 
              path="*" 
              element={
                <div>
                  <h1>404</h1>
                  <p>Page not found</p>
                </div>
              } 
            />
          </Routes>
        </div>
      </Router>
    );
  }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default APP;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx