/**
 * @description   Creates the navbar component
 * @author        Luke Boyle
 * @since         23 Jun 2022
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 23 Jun 2022  | DEPENDENCIES and VARIABLES | Created
 * 
*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  DEPENDENCIES and VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink }         from "react-router-dom";

  // MUI Dependencies
  import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Button,
    Link,
    MenuItem,
  } from '@mui/material';

  import {
    Menu
  } from '@mui/icons-material';

  // Links to other pages
  const navLinks = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Board',
      path: '/board'
    }
  ];

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//  COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function Navbar() {
    const [isMobileView, setIsMobileView] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Check if view is mobile
    useEffect(() => {
      const setWindowWidth = () => {
        return window.innerWidth < 900
          ? setIsMobileView(true)
          : setIsMobileView(false);
      };

      setWindowWidth();
      window.addEventListener('resize', setWindowWidth);

      return () => {
        window.removeEventListener('resize', setWindowWidth);
      };
    }, []);

    /**
      * @function     displayDesktopNav
      * @description  Toolbar content on desktop screens
      * @author       Luke Boyle
      * @version      1.0.0
      * @since        1.0.0
      * Dev notes:
      * @returns      { Element } - Toolbar with menu buttons
    */
    const displayDesktopNav = () => {
      return (
        <Toolbar 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {getMenuButtons()}
          </div>
        </Toolbar>
      );
    };


    /**
      * @function     displayMobileNav
      * @description  Toolbar content on mobile screens with drawer handlers
      * @author       Luke Boyle
      * @version      1.0.0
      * @since        1.0.0
      * Dev notes:
      * @returns      { Element } - Toolbar with menu buttons
    */
    const displayMobileNav = () => {
      // Handle opening hamburger menu
      const handleDrawerOpen = () => {
        setIsDrawerOpen(true)
      };

      // Handle closing hamburger menu
      const handleDrawerClose = () => {
        setIsDrawerOpen(false)
      };

      return (
        <>
        <Toolbar>
          {/* Hamburger Button */}
          <IconButton
            edge          ="start"
            color         ="inherit"
            aria-label    ="menu"
            aria-haspopup ="true"
            onClick       ={ handleDrawerOpen }
          >
            <Menu />
          </IconButton>

          <Drawer
            anchor  ="left"
            open    ={ isDrawerOpen }
            onClose ={ handleDrawerClose }
          >
            <div 
              sx={{
                py: "20px",
                px: "30px"
              }}
            >
              { getDrawerChoices() }
            </div>
          </Drawer>
        </Toolbar>
        </>
      );
    };

    /**
      * @function     getDrawerChoices
      * @description  Loop through navLinks to create links for mobile navbar
      * @author       Luke Boyle
      * @version      1.0.0
      * @since        1.0.0
      * Dev notes:
      * @returns      { Element } - Navbar link
    */
    const getDrawerChoices = () => {
      return navLinks.map(({ label, path }) => {
        return (
          <Link
            component = { RouterLink }
            to        = { path }
            color     = "inherit"
            key       = { label }
            sx={{ 
              textDecoration: "none" 
            }}
          >
            <MenuItem>
              { label }
            </MenuItem>
          </Link>
        );
      });
    };

    /**
      * @function     getMenuButtons
      * @description  Loop through navLinks to create buttons for desktop navbar
      * @author       Luke Boyle
      * @version      1.0.0
      * @since        1.0.0
      * Dev notes:
      * @returns      { Element } - Navbar button
    */
    const getMenuButtons = () => {
      return navLinks.map(({ label, path }) => {
        return (
          <Button
            key       = { label }
            color     = "inherit"
            to        = { path }
            component = { RouterLink }
            sx={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 700,
              size: "18px",
              ml: "38px",
            }}
          >
            { label }
          </Button>
        );
      });
    };

    // HTML content to display
    return (
      <header>
        <AppBar 
          sx={{
            bgcolor: "#400CCC",
            pr: "79px",
            pl: {
              xs: 0,
              sm: 118
            },
          }}
        >
          {
            isMobileView 
              ? displayMobileNav() 
              : displayDesktopNav()
          }
        </AppBar>
      </header>
    );
  }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default Navbar;

/*
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  END OF FILE
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/