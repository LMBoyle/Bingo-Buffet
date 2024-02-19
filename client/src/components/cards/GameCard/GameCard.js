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
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink }         from "react-router-dom";

  // MUI Dependencies
  import Card               from '@mui/material/Card';
  import CardContent        from '@mui/material/CardContent';
  import { CardActionArea } from '@mui/material';
  import Typography         from '@mui/material/Typography';
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function GameCard( data ) {

    // HTML content to display
    return (
      <Card sx={{margin: '2px'}}>
        {/* Makes card clickable and routes to the game page */}
        <CardActionArea 
          component={RouterLink} 
          to={data.reroute ? "/underConstruction" : data.link}
        >
          {/* Content of card */}
          <CardContent>
            {/* Card Header */}
            <Typography variant="h5" component="div">
              {data.name}
            </Typography>

            {/* Card Body */}
            <Typography variant="body2">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default GameCard;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx