/**
 * @file      Creates the board for tic tac bingo
 * @author    Luke Boyle
 * @since     1.0.0
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 18 Feb 2024  | DEPENDENCIES               | Created
 * Luke B | 18 Feb 2024  | VARIABLES                  | Created
 * Luke B | 18 Feb 2024  | FUNCTIONS                  | Created
 * Luke B | 18 Feb 2024  | COMPONENT                  | Created
 * Luke B | 18 Feb 2024  | EXPORT                     | Created
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React, { useState } from "react";

  // MUI Dependencies

  // Custom CSS
  import './BoardSquare.scss';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const WHITE = '#fff';
  const GREEN = "#39D1B4";

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// FUNCTIONS
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // function handleClick(i) {
  //   // Prevent any more clicks once the user gets "bingo"
  //   if (calculateWinner(squares)) {
  //     return;
  //   }

  //   onPlay(nextSquares);
  // }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function Square( { value, index, colour } ) {
    const [
      buttonColor, 
      setButtonColor
    ] = useState(GREEN);


    function handleColourChange( e ) {
      console.log('clicked');

      const NEW_COLOUR = buttonColor === GREEN ? WHITE : GREEN;

      setButtonColor(NEW_COLOUR);
    }

    return (
      <button
        className = "square" 
        onClick   = { handleColourChange }
        index     = { index }
        style     = { { backgroundColor: buttonColor } }
      >
        { value }
      </button>
    );
  }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default Square;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx