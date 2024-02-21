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
  import React, { useEffect, useState } from "react";

  // MUI Dependencies
  import Button             from '@mui/material/Button';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

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
    * 
    * Dev Info ---------------------------------------------------
    * @param bingoWords
    * @param numFields
    * @param allowAdd
    * @param allowRemove
    * @param talkToParent
  */
  function WordInput( { bingoWords, numFields, allowAdd, allowRemove, talkToParent } ) {
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // STATE
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      // The input fields themselves
      const [
        inputFields,
        setInputFields
      ] = useState(Array(numFields).fill(""))

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HOOKS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

      // Pass the words back to the parent
      useEffect(() => {
        talkToParent(inputFields.filter((field) => field.trim() !== ''))
      }, [ inputFields, talkToParent ]);

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // FUNCTIONS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    const handleAddField = () => {
      // Add the field to the array
      setInputFields([
        ...inputFields, 
        ""
      ])
    }

    const handleRemoveField = ( index ) => {
      // Check if any more fields can be removed
      if (inputFields.length > numFields) {
        const updatedFields = [...inputFields];
        updatedFields.splice(index, 1);
        setInputFields(updatedFields);
      }
    }

    // Handle putting in data
    const handleFieldInput = ( index, value ) => {
      // Get all the data
      const updatedField  = [...bingoWords];

      // Set the current value and set it
      updatedField[index] = value;
      
      // Set the fields
      talkToParent(updatedField);
    }

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HTML
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    return (
      <section id="WordInput" className="Main-Section">
        {/* INPUT FORM */}
        <form>
          {inputFields.map(( field, index ) => {
            return (
              <div key={index}>
                {/* Word input */}
                <input
                  name        = 'word'
                  placeholder = 'your word here'
                  onChange    = { (e) => handleFieldInput( index, e.target.value ) }
                  value       = { field }
                />

                {/* If fields can be removed */}
                { (allowRemove && inputFields.length > numFields) &&
                  <Button  
                    onClick={() => handleRemoveField( index ) } 
                    variant="contained"
                    color="error"
                  >
                    Remove
                  </Button>
                }
              </div>
            )
          })}
        </form>
        {/* If fields can be added */}
        { allowAdd && 
          <Button 
            onClick={ handleAddField } 
            variant="contained"
            color="success"
          > 
            Add More..
          </Button>
        }
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