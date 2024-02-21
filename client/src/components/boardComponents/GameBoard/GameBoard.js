/**
 * @file      Creates the board bingo
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
  import React, { useState, useEffect } from "react";

  // MUI Dependencies

  // Custom Components
  import BoardSquare from '../../boardComponents/BoardSquare/BoardSquare'

  // Custom CSS
  import './GameBoard.scss';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  function GameBoard( { numSquares, bingoWords } ) {
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // STATE
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      const [
        shuffledWords, 
        setShuffledWords
      ] = useState([]);

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HOOKS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    useEffect(() => {
      setShuffledWords([...bingoWords.sort(() => Math.randon() - 0.5)])
    }, [bingoWords]);

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // CONTENT
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    return (
      <section className="GameBoard, Main-Section">
        {shuffledWords.slice( 0, numSquares ).map(( word, index ) => (
          <BoardSquare 
            value = { word } 
            index = { index } 
          />
        ))}
      </section>
    );
  };

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default GameBoard;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx