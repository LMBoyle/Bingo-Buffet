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
 * Luke B | 23 Feb 2024  | MUI Stack                  | Added
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React, { useState, useEffect } from "react";
  import { Link }                       from 'react-router-dom';

  // MUI Dependencies
  import Button       from '@mui/material/Button';
  import Typography   from '@mui/material/Typography';
  import Stack        from '@mui/material/Stack';

  // MUI Icons
  import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';

  // Custom Components
  import GameBoard    from "../components/boardComponents/GameBoard/GameBoard";
  import WordInput    from "../components/boardComponents/WordInput/WordInput";

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
    * Luke B | 23 Feb 2024 | Added Stack around buttons
    * Dev Info ---------------------------------------------------
    * 
  */
  const GameWrapper = ({ allowGridSelect, gridSize }) => {
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // STATE
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      // State for showing/hiding the board or form
      const [
        showInput, 
        setShowInput
      ] = useState(true);

      // State for all the inputs
      const [
        bingoData, 
        setBingoData
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

      // Change showInput each time the button is clicked
      const toggleView = () => {
        setShowInput(!showInput);
      };

      // Update the list of bingo words
      const updateBingoData = (data) => {
        setBingoData(data);
      };

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // CONTENT
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
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
          {showInput ? (
            <WordInput 
              bingoData        = { bingoData }
              updateBingoData  = { updateBingoData }
            />
          ) : (
            <GameBoard 
              bingoData  = { bingoData }
            />
          )}

          {/* Instructions for the game */}
          <section id='GameInstructions'>
            { showInput ? 
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
          
          <br/>

          <section>
            <Stack spacing={2} direction="row">
              {/* Button edit or play */}
              <Button 
                onClick = { toggleView }
                variant = 'contained'
              >
                { showInput ? "Let's Play" : "Edit Words" }
              </Button>

              {/* Home button */}
              <Button 
                component = { Link } 
                to        = "/"
                variant   = 'contained'
              > 
                Go home <HouseOutlinedIcon />
              </Button>
            </Stack>
          </section>
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