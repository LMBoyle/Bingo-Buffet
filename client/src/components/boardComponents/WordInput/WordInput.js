/**
 * @description   Creates the game type card component
 * @author        Luke Boyle
 * @since         17 Feb 2024
 * 
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 17 Feb 2024 | DEPENDENCIES                | Created
 * Luke B | 17 Feb 2024 | VARIABLES                   | Created
 * Luke B | 17 Feb 2024 | COMPONENT                   | Created
 * Luke B | 17 Feb 2024 | EXPORT                      | Created
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React, { useState } from "react";

  // MUI Dependencies
  import Button             from '@mui/material/Button';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function WordInput( {numFields, allowAdd, allowRemove, callback} ) {
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // STATE
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    const [bingoWords, setBingoWords] = useState([
      { 
        word: ""
      }
    ])

    const ADD_WORDS = (data) => {
      // Add the field to the array
      setBingoWords([
        ...bingoWords, 
        {word: ""}
      ])
    }

    const REMOVE_FIELDS = (index) => {
      let data = [...bingoWords];
      data.splice(index, 1)
      setBingoWords(data)
    }

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // FUNCTIONS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    // Handle putting in data
    const HANDLE_INPUT = (event, index) => {
      // Get all the data
      let data = [...bingoWords];

      // Set the current value and set it
      data[index][event.target.name] = event.target.value;
      
      // Set the fields
      setBingoWords(data);
    }

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HTML
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    return (
      <section id="WordInput" className="Main-Section">
        {/* INPUT FORM */}
        <div> This functionality is still in progress. You can click play and play with pre-set words. Check back soon!</div>
        {/* If fields can be added */}
        { allowAdd ? 
          (
            <Button 
              onClick={ ADD_WORDS } 
              variant="contained"
              color="success"
            > 
              Add More..
            </Button>
          ) : (
            null
          )
        }
        <br />
        {/* <Button 
          onClick={() => callback(bingoWords) } 
          variant="contained"
          color="success"
        > 
          Submit
        </Button> */}
      </section>
    );
  }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default WordInput;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx