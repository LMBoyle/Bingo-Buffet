/**
  * @description  Routes
  * @author       Luke Boyle
  * @since        17 Feb 2024
  * 
  * Dev Log --------------------------------------------------------
  * Who    | When         | What                       | Why
  * ----------------------------------------------------------------
  * Luke B | 17 Feb 2024 | DEPENDENCIES                | Created
  * Luke B | 17 Feb 2024 | VARIABLES                   | Created
  * Luke B | 17 Feb 2024 | EXPRESS                     | Created
  * Luke B | 17 Feb 2024 | ROUTES                      | Created
  * Luke B | 17 Feb 2024 | LISTEN                      | Created
  * Luke B | 17 Feb 2024 | DATABASE (MongoDB)          | Created
  * Luke B | 17 Feb 2024 | DEV ENV ONLY TOOLS          | Created
  * Luke B | 17 Feb 2024 | ROUTES                      | Updated to point to routes folder
  * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const PATH      = require("path");
  const ROUTER    = require("express").Router();
  // const apiRoutes = require("./api");

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// ROUTES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // TODO API Routes
  // ROUTER.use("/api", apiRoutes);

  // If no API routes are hit, send the React app
  ROUTER.use(function(req, res) {
    res.sendFile(PATH.join(__dirname, "../../client/public/index.html"));
  });

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  module.exports = ROUTER;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx