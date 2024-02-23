/**
 * @description   Creates the game type card component
 * @author        Luke Boyle
 * @since         17 Feb 2024
 * 
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 17 Feb 2024 | DEPENDENCIES                    | Created
 * Luke B | 17 Feb 2024 | VARIABLES                       | Created
 * Luke B | 17 Feb 2024 | COMPONENT                       | Created
 * Luke B | 17 Feb 2024 | EXPORT                          | Created
 * Luke B | 23 Feb 2024 | TextField, Box, WordInput.scss  | Added
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React, { useEffect, useState } from "react";

  // MUI Dependencies
  import Button             from '@mui/material/Button';
  import TextField          from '@mui/material/TextField';
  import Box                from '@mui/material/Box';

  // Styles
  import './WordInput.scss';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  /** 
    * @description  Word input form and its logic
    * @author       Luke Boyle
    *  
    * Mod Log ----------------------------------------------------
    * Who    | When        | Why
    * ------------------------------------------------------------
    * Luke B | 18 Feb 2024 | Created
    * Luke B | 19 Feb 2024 | Moved some logic to GameWrapper
    * Luke B | 19 Feb 2024 | Added ability to select how many fields to start with as well as add or remove fields
    * Luke B | 23 Feb 2024 | Added input fields styling
    * 
    * Dev Info ---------------------------------------------------
    * @param bingoWords
    * @param numFields
    * @param allowAdd
    * @param allowRemove
    * @param handleInputChange
  */
  const WordInput = ({ bingoData, updateBingoData }) => {
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // STATE
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      const [inputValues, setInputValues] = useState(Array(9).fill(''));

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HOOKS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      useEffect(() => {
        if (bingoData.length > 0) {
          setInputValues(bingoData);
        }
      }, [bingoData]);

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HELPERS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      const handleChange = (index, value) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
        updateBingoData(newValues);
      };

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // CONTENT
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      return (
        <section id="WordInput" className="Main-Section">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            {inputValues.map((value, index) => (
              <TextField
                type      = "text"
                label     = { "Word "+ (index+1) }
                value     = {value}
                onChange  = {(e) => handleChange(index, e.target.value)}
              />
            ))}
          </Box>
        </section>
      );
  };

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default WordInput;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx