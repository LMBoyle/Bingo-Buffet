/**
 * @file      Creates the homepage
 * @author    Luke Boyle
 * @since     1.0.0
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 23 Jun 2022  | DEPENDENCIES and VARIABLES | Created
 * Luke B | 23 Jun 2022  | COMPONENT                  | Created
 * Luke B | 23 Jun 2022  | EXPORT                     | Created
 * Luke B | 17 Feb 2024  | All section breaks         | Updated formatting

*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React from "react";

  // MUI Dependencies

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const projects = [
    {
      "name": "Tic-Tac-Bingo",
      "route": "",
      "underConstruct": false
    },
    {
      "name": "Classic Bingo",
      "route": "",
      "underConstruct": true
    },
    {
      "name": "Buzz Word Bingo",
      "route": "",
      "underConstruct": true
    }
  ]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function Homepage() {
    // HTML content
    return (
      <main className="C-Homepage">
        <h1> Welcome to Buffet Bingo! </h1>
        <h2> Select your game below! </h2>
        {/* Display a card for each game type */}
      </main>
    );
  };

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default Homepage;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx