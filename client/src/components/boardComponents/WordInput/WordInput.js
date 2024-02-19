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

    const [formFields, setFormFields] = useState([
      { 
        word: ""
      },
    ])
  
    const ADD_FIELDS = () => {
      // Create a new field
      let newfield = {
        word: ""
      }
  
      // Add the field to the array
      setFormFields([...formFields, newfield])
    }

    const REMOVE_FIELDS = (index) => {
      let data = [...formFields];
      data.splice(index, 1)
      setFormFields(data)
    }  

    const SUBMIT = (e) => {
      e.preventDefault();
      console.log(formFields)
    }

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // FUNCTIONS
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    // Handle putting in data
    const HANDLE_INPUT = (event, index) => {
      // Get all the data
      let data = [...formFields];

      // Set the current value and set it
      data[index][event.target.name] = event.target.value;
      
      // Set the fields
      setFormFields(data);
    }

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // HTML
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    return (
      <section id="WordInput" className="Main-Section">
        {/* INPUT FORM */}
        <form>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                {/* Word input */}
                <input
                  name        = 'word'
                  placeholder = 'your word here'
                  onChange    = { event => HANDLE_INPUT( event, index ) }
                  value       = { form.name }
                />

                {/* If fields can be removed */}
                { allowRemove ? 
                  (
                    <Button  
                      onClick={() => REMOVE_FIELDS( index) } 
                      variant="contained"
                      color="error"
                    >
                      Remove
                    </Button>
                  ) : (
                    null
                  )
                }
              </div>
            )
          })}
        </form>
        {/* If fields can be added */}
        { allowAdd ? 
          (
            <Button 
              onClick={ ADD_FIELDS } 
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
        <Button 
          onClick={() => callback(formFields) } 
          variant="contained"
          color="success"
        > 
          Submit
        </Button>
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