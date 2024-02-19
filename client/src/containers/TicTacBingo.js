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
  import Button       from '@mui/material/Button';
  import { Link }     from 'react-router-dom';
  import Typography   from '@mui/material/Typography';


  // Custom Components
  import TicTacBoard  from "../components/boards/TicTacBoard/TicTacBoard";
  import WordInput    from "../components/boardComponents/WordInput/WordInput";

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // const WON_GAME = calculateWinner(squares);

  const mockSquares = [
    {word: "dog"},
    {word: "cat"},
    {word: "wolf"},
    {word: "fish"},
    {word: "tiger"},
    {word: "bird"},
    {word: "horse"},
    {word: "chicken"},
    {word: "cow"}
  ]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// FUNCTIONS
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function TicTacBingo() {
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // STATE
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      const [
        showBoard, 
        setShowBoard
      ] = useState(false);

      const [
        formFields, 
        setFormFields
      ] = useState([])

      const TOGGLE_PLAY = () => {
        setShowBoard(!showBoard);
      };

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // VARIABLES
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      let buttonText = showBoard ? "Edit Values" : "Let's Play!";

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // FUNCTIONS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      const GET_INPUT = (values) => {
        console.log('val: ', values)
        const allValues = values.map(val => {
          return {
            ...formFields,
            word: val.word
          }
        })
        // Add the field to the array
        setFormFields(allValues);
        console.log('form ', formFields)
      }
    
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // COMPONENT
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      return (
        <main className="C-TicTacBoard, Board-Container">
          {/* Button edit or play */}
          <Button variant="contained" onClick={TOGGLE_PLAY}>
            {buttonText}
          </Button>

          { showBoard ? 
            (
              <TicTacBoard
                squares = { mockSquares }
              />
            ) : (
              // <Input/>
              <WordInput 
                numFields   = { 9 }
                allowAdd    = { false }
                allowRemove = { false }
                callback    = { GET_INPUT }
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