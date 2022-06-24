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

import './App.scss';

// React Dependencies
import React from 'react';
import { 
  Routes, 
  Route 
} from 'react-router-dom';

// Import containers
import Homepage from '../containers/Homepage';
import Board from '../containers/Board';

// Import components
import Navbar   from '../components/layout/Navbar/Navbar';

/* 
==============================================================
  COMPONENT
============================================================== 
*/

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={ 
          <Homepage /> 
        } />

        {/* Board */}
        <Route path="board" element={ 
          <Board /> 
        } />

        {/* Catch all */}
        <Route path="*" element={
          <div>
            <h1>404</h1>
            <p>Page not found</p>
          </div>
        } />

      </Routes>
    </div>
  );
}

/* 
==============================================================
  EXPORT
============================================================== 
*/

export default App;

/*
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  END OF FILE
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/