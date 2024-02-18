/**
 * @description   Creates the game type card component
 * @author        Luke Boyle
 * @since         17 Feb 2024
 * 
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 17 Feb 2024 | DEPENDENCIES                | Created
 * Luke B | 17 Feb 2024 | VARIABLES                   | Created
 * Luke B | 17 Feb 2024 | COMPONENT                   | Created
 * Luke B | 17 Feb 2024 | EXPORT                      | Created
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink }         from "react-router-dom";

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function GameCard() {

    // HTML content to display
    return (
      <header>
        <AppBar 
          sx={{
            bgcolor: "#400CCC",
            pr: "79px",
            pl: {
              xs: 0,
              sm: 118
            },
          }}
        >
          {
            isMobileView 
              ? displayMobileNav() 
              : displayDesktopNav()
          }
        </AppBar>
      </header>
    );
  }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default GameCard;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx