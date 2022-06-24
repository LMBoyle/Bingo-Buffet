/**
  * @file      Sets up the server
  * @author    Luke Boyle
  * @version   1.0.0
  * @since     1.0.0
*/

/*
==============================================================
  DEPENDENCIES and VARIABLES
============================================================== 
*/

const EXPRESS     = require("express");
const CORS        = require("cors");
require("dotenv").config();

// Initialise Express
const APP         = EXPRESS();

// Set Port
const PORT        = process.env.PORT || 3001;

// Set cors options
let corsOptions   = { 
  origin: 'http://localhost:3000' 
};

// TODO DB Config

// TODO MongoDB connection URI

/*
==============================================================
  EXPRESS
============================================================== 
*/

// Cors middleware
APP.use(CORS(corsOptions));

// Parse requests of content-type - APPlication/json
APP.use(EXPRESS.json());

// Parse requests of content-type - APPlication/x-www-form-urlencoded
APP.use(EXPRESS.urlencoded({ extended: true }));

/*
==============================================================
  DATABASE (MongoDB)
============================================================== 
*/

// TODO Connect to Database

/*
==============================================================
  ROUTES
============================================================== 
*/

APP.get("/", (req, res) => res.json({ msg: "Welcome to the APP" }));

// TODO API Routes

/*
==============================================================
  LISTEN
============================================================== 
*/

APP.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);

  // TODO Call connect to MongoDB
});

/*
==============================================================
  DEV ENV ONLY TOOLS
==============================================================
*/


/*
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  END OF FILE
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/