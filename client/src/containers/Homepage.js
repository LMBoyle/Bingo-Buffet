/**
 * @file      Creates the homepage
 * @author    Luke Boyle
 * @since     1.0.0
 * Dev Log --------------------------------------------------------
 * Who    | When         | What                       | Why
 * ----------------------------------------------------------------
 * Luke B | 23 Jun 2022  | DEPENDENCIES and VARIABLES | Created
 * Luke B | 23 Jun 2022  | COMPONENT                  | Created
 * Luke B | 23 Jun 2022  | EXPORT                     | Created
 * Luke B | 17 Feb 2024  | All section breaks         | Updated formatting

*/

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// DEPENDENCIES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // React Dependencies
  import React from "react";

  // MUI Dependencies

  // Custom Components
  import GameCard from '../components/cards/GameCard/GameCard'

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// VARIABLES
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // All the bingo types
  const GAME_TYPES = [
    {
      "name":           "Tic-Tac-Bingo",
      "description":    "A grid of nine boxes. Fill in the words you want to display.",
      "route":          "/game/tic-tac-bingo",
      "underConstruct": false
    },
    {
      "name":           "Classic Bingo",
      "description":    "Exactly what the name is! Classic Bingo cards! Select how many you want and then go play.",
      "route":          "/game/classic",
      "underConstruct": true
    },
    {
      "name":           "Buzz Word Bingo",
      "description":    "Size of a classic bingo card but fill in your own words to display.",
      "route":          "/game/buzz-word",
      "underConstruct": true
    }
  ];

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COMPONENT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function Homepage() {
    // HTML content
    return (
      <main className="C-Homepage">
        <h1> Welcome to Buffet Bingo! </h1>
        <h2> Select your game below! </h2>
        {/* Display a card for each game type */}
        {GAME_TYPES.map(game => (
          <GameCard
            name        = {game.name}
            description = {game.description}
            link        = {game.route}
            reroute     = {game.underConstruct}
          />
        ))}
        <p> Thanks for visiting. See the source code <a href='https://github.com/LMBoyle/Bingo-Buffet'> here </a></p>
      </main>
    );
  };

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// EXPORT
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  export default Homepage;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// END OF FILE
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx