/**
 * @file      Creates the board for tic tac bingo
 * @author    Luke Boyle
 * @since     1.0.0
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 18 Feb 2024  | DEPENDENCIES               | Created
 * Luke B | 18 Feb 2024  | VARIABLES                  | Created
 * Luke B | 18 Feb 2024  | COMPONENT                  | Created
 * Luke B | 18 Feb 2024  | EXPORT                     | Created
 * Luke B | 18 Feb 2024  | SCSS, BoardSquare          | Added
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React, { useState } from "react";

  // MUI Dependencies

  // Custom Components
  import BoardSquare from '../../boardComponents/BoardSquare/BoardSquare'

  // Custom CSS
  import './TicTacBoard.scss';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // const WON_GAME = calculateWinner(squares);

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// FUNCTIONS
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function TicTacBoard( {squares} ) {
    console.log(squares);
    // HTML content
    return (
      <section id="TicTacBoard" className="Main-Section">
        {squares.map((sqr, i) => {
          return (
            <BoardSquare value={sqr.word} index={i} />
          )
        })}
      </section>
    );
  };

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default TicTacBoard;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx