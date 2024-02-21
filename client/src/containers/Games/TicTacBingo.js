/**
 * @description Creates the board for tic tac bingo
 * 
 * Mod Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 18 Feb 2024  | DEPENDENCIES               | Created
 * Luke B | 18 Feb 2024  | COMPONENT                  | Created
 * Luke B | 18 Feb 2024  | EXPORT                     | Created
 * Luke B | 20 Feb 2024  | Game Wrapper               | Added
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React from "react";

  // MUI Dependencies

  // Custom Components
  import GameWrapper from '../GameWrapper'

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  /** 
    * @description  Logic to show/hide the fields and boards and handle the state logic
    * @author       Luke Boyle
    *  
    * Mod Log ----------------------------------------------------
    * Who    | When        | Why
    * ------------------------------------------------------------
    * Luke B | 18 Feb 2024 | Created
    * Luke B | 19 Feb 2024 | Added logic to go between children
    * Luke B | 20 Feb 2024 | Added allowGridSelect, gridSize
    * 
  */
  function TicTacBingo() {    
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // COMPONENT
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      /** 
        * @description  Display the Game
        * @author       Luke Boyle
        *  
        * Mod Log ----------------------------------------------------
        * Who    | When        | Why
        * ------------------------------------------------------------
        * Luke B | 18 Feb 2024 | Created
        * 
      */
      return (
        <main className="C-TicTacBoard">
          <GameWrapper
            allowGridSelect = { false }
            gridSize        = { "3x3" }
          />
        </main>
      );
  };

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default TicTacBingo;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx