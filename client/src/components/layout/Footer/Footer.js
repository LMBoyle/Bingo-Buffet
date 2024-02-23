/**
 * @description  Footer for site
 * 
 * Mod Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 22 Feb 2024  | Whole File                 | Created
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React from "react";

  // MUI Dependencies

  // MUI Icons

  // Styles
  import './Footer.scss'

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const Footer = () => {

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // CONTENT
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
      return (
        <footer>
          <p> Copyright 2024 - <a href='https://www.linkedin.com/in/lukemboyle/'> Luke Boyle </a></p>
          <p> Check out more projects <a href='https://lmboyle.github.io/'> here </a></p>
        </footer>
      );
  };

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default Footer;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx