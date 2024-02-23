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

  const GameBoard = ({ bingoData }) => {
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // STATE
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      const [
        shuffledData, 
        setShuffledData
      ] = useState([]);

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HOOKS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      useEffect(() => {
        setShuffledData([...bingoData].sort(() => Math.random() - 0.5));
      }, [bingoData]);

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // CONTENT
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      /** 
        * @description  Display each bingo square
        * @author       Luke Boyle
        *  
        * Mod Log ----------------------------------------------------
        * Who    | When        | Why
        * ------------------------------------------------------------
        * Luke B | 18 Feb 2024 | Created
        * 
      */
      return (
        <section className={ "Main-Section" }>
          <table>
            <tbody>
              <tr className='Row'>
                {shuffledData.slice(0, 3).map(( word, index ) => (
                  <BoardSquare 
                    value = { word } 
                    index = { index } 
                  />
                ))}
              </tr>
              <tr className='Row'>
                {shuffledData.slice(3, 6).map(( word, index ) => (
                  <BoardSquare 
                    value = { word } 
                    index = { index } 
                  />
                ))}
              </tr>
              <tr className='Row'>
                {shuffledData.slice(6, 9).map(( word, index ) => (
                  <BoardSquare 
                    value = { word } 
                    index = { index } 
                  />
                ))}
              </tr>
            </tbody>
          </table>
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