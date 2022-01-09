@RottenTomatoesScrap
Feature: Getting Top 250 Movies 
  I want to make sure /getMoviesRT operation through REST API works fine

  Scenario Outline: get movies by firstCharacter
    Given A firstCharacter <character> exist
    When I send GET request to /getMoviesRT
    Then I receive <response> 

    Examples:
      | firstCharacter | response                                                         |
      | a              | {"Around the World in 80 Days", "Arcane", "Avengers: Endgame"}   |