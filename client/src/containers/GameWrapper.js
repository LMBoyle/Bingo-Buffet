/**
 * @description Wrapper of the game, displays input or board
 * 
 * Mod Log --------------------------------------------------------
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
  import React, { useState, useEffect } from "react";

  // MUI Dependencies
  import Button       from '@mui/material/Button';
  import { Link }     from 'react-router-dom';
  import Typography   from '@mui/material/Typography';

  // MUI Icons
  import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';

  // Custom Components
  import GameBoard    from "../components/boardComponents/GameBoard/GameBoard";
  import WordInput    from "../components/boardComponents/WordInput/WordInput";

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // const WON_GAME = calculateWinner(squares);

  const mockSquares = [
    "dog",
    "cat",
    "wolf",
    "fish",
    "tiger",
    "bird",
    "horse",
    "chicken",
    "cow"
  ]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// FUNCTIONS
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

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
    * Dev Info ---------------------------------------------------
    * 
  */
  function GameWrapper( { allowGridSelect, gridSize } ) {
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // STATE
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      // State for showing/hiding the board or form
      const [
        showBoard, 
        setShowBoard
      ] = useState(false);

      // State for all the inputs
      const [
        bingoWords, 
        setBingoWords
      ] = useState([]);

      // State for Board Size
      const [
        selectedOption, 
        setSelectedOption
      ] = useState( gridSize );

      // State for how many fields to display
      const [
        numFields, 
        setNumFields
      ] = useState(9);

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HOOKS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      // Change what the grid size is
      useEffect(() => {
        const sizes = {
          '3x3': 9,
          '5x5': 10,
          '8x8': 16,
        };
        setNumFields(sizes[selectedOption]);
      }, [selectedOption]);

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // FUNCTIONS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      // Change showBoard each time the button is clicked
      const togglePlay = () => {
        setShowBoard(!showBoard);
      };

      // Update the list of bingo words
      const handleInputChange = (values) => {
        setBingoWords(values);
      }
    
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // CONTENT
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      /** 
        * @description  Display the form or the bingo board
        * @author       Luke Boyle
        *  
        * Mod Log ----------------------------------------------------
        * Who    | When        | Why
        * ------------------------------------------------------------
        * Luke B | 18 Feb 2024 | Created
        * Luke B | 20 Feb 2024 | Added conditional for showing grid select
        * 
      */
      return (
        <main className="Board-Container">

          {/* Settings for the Game */}
          <section id="gameSettings">
            {/* Select Board Size */}
            { allowGridSelect &&
              <div>
                <label>Select Grid Size:</label>
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="3x3"> 3x3 </option>
                  <option value="5x5"> 5x5 </option>
                  <option value="8x8"> 8x8 </option>
                </select>
              </div>
            }

            {/* Select Colour Options */}
            {/* TODO */}

          </section>

          {/* Board or Input */}
          { showBoard ? 
            (
              <GameBoard
                squares = { bingoWords }
              />
            ) : (
              <WordInput 
                bingoWords     = { bingoWords }
                numFields      = { numFields }
                allowAdd       = { false }
                allowRemove    = { false }
                talkToParent   = { handleInputChange }
              />
            )
          }

          <section id='GameInstructions'>
            { !showBoard ? 
              ( // Input instruction
                <div>
                  <Typography variant="body1"> Enter nine (9) items then click on "Let's Play!" </Typography>
                </div>
              ) : ( // Game instruction
                <div>
                  <Typography variant="body1"> When an item on your board is called, click on the square to colour it. </Typography>
                  <Typography variant="body2"> If you accidentally click on a square, just click it again to un-colour it. </Typography>
                  <Typography variant="body2"> If you want to change your words, click on "Edit Values". </Typography>
                </div>
              )
            }
          </section>

          {/* Button edit or play */}
          <Button variant="contained" onClick={ togglePlay }>
            { showBoard ? "Edit Values" : "Let's Play!" }
          </Button>

          {/* Home button */}
          <Button 
            component = { Link } 
            to        = "/"
            variant   = 'contained'
          > 
            Go home <HouseOutlinedIcon />
          </Button>
        </main>
      );
  };

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default GameWrapper;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx