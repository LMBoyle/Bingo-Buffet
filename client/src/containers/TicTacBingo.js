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
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React, { useState } from "react";

  // MUI Dependencies
  import Button from '@mui/material/Button';
  import { Link } from 'react-router-dom';

  // Custom Components
  import TicTacBoard from "../components/boards/TicTacBoard/TicTacBoard";

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

  function TicTacBingo() {
    const [
      showBoard, 
      setShowBoard
    ] = useState(false);

    const TOGGLE_PLAY = () => {
      setShowBoard(!showBoard);
    };

    let buttonText = showBoard ? "Edit Values" : "Let's Play!";

    // HTML content
    return (
      <main className="C-TicTacBoard, Board-Container">
        {/* Button edit or play */}
        <Button variant="contained" onClick={TOGGLE_PLAY}>
          {buttonText}
        </Button>

        { showBoard ? 
          (
            <TicTacBoard
              // squares = {gameValues}
            />
          ) : (
            // <Input/>
            <p> Edit mode </p>
          )
        }

        {/* Home button */}
        <Button 
          component = {Link} 
          to        = "/"
          variant   = 'contained'
        > 
          Go home
        </Button>
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