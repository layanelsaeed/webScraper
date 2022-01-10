@ImdbScrap
Feature: Getting Top 250 Movies 
  I want to make sure /imdb operation through REST API works fine

    Scenario Outline: get movies by firstCharacter
      Given A firstCharacter <character> exist
      When I send GET request to /imdb
      Then I receive <response> 

    Examples:
      | character | response                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
      | s         | [ "Schindler's List", "Star Wars: Episode V - The Empire Strikes Back", "Spider-Man: No Way Home", "Shichinin no samurai", "Se7en", "Saving Private Ryan", "Star Wars", "Sen to Chihiro no kamikakushi", "Seppuku", "Sunset Blvd.", "Spider-Man: Into the Spider-Verse", "Star Wars: Episode VI - Return of the Jedi", "Singin' in the Rain", "Scarface", "Snatch", "Some Like It Hot", "Shutter Island", "Smultronstället", "Salinui chueok", "Stalker", "Sherlock Jr.", "Stand by Me", "Spotlight", "Shin seiki Evangelion Gekijô-ban: Air/Magokoro wo, kimi ni" ]                   |
