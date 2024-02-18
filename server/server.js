/**
  * @description  Sets up the server
  * @author       Luke Boyle
  * @since        23 Jun 2022
  * 
  * Dev Log --------------------------------------------------------
  * Who    | When         | What                       | Why
  * ----------------------------------------------------------------
  * Luke B | 23 Jun 2022 | DEPENDENCIES                | Created
  * Luke B | 23 Jun 2022 | VARIABLES                   | Created
  * Luke B | 23 Jun 2022 | EXPRESS                     | Created
  * Luke B | 23 Jun 2022 | ROUTES                      | Created
  * Luke B | 23 Jun 2022 | LISTEN                      | Created
  * Luke B | 23 Jun 2022 | DATABASE (MongoDB)          | Created
  * Luke B | 23 Jun 2022 | DEV ENV ONLY TOOLS          | Created
  * Luke B | 17 Feb 2024 | ROUTES                      | Updated to point to routes folder
  * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // Express/Cors
  const EXPRESS     = require("express");
  const CORS        = require("cors");

  // Dot Env
  require("dotenv").config();
  
  // Routes
  const routes = require("./routes");

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // Initialise Express
  const APP         = EXPRESS();

  // Set Port
  const PORT        = process.env.PORT || 1745;

  // Set cors options
  // let corsOptions   = { 
  //   origin: 'http://localhost:3000' 
  // };

  // TODO DB Config

  // TODO MongoDB connection URI

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPRESS
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // Cors middleware
  // APP.use(CORS(corsOptions));
  APP.use(CORS());

  // Parse requests of content-type - APPlication/json
  APP.use(EXPRESS.json());

  // Parse requests of content-type - APPlication/x-www-form-urlencoded
  APP.use(EXPRESS.urlencoded({ extended: true }));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DATABASE (MongoDB)
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // TODO Connect to Database

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// ROUTES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // Use ./routes
  APP.use(routes);

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// LISTEN
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  APP.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
  });

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEV ENV ONLY TOOLS
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx