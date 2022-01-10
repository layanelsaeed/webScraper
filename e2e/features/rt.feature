@RottenTomatoesScrap
Feature: Getting Top 100 Movies 
  I want to make sure /rottenTomatoes operation through REST API works fine

  Scenario Outline: get movies by firstCharacter
    Given A firstCharacter <character> exist
    When I send GET request to /rottenTomatoes
    Then I receive <response> 

    Examples:
      | character | response                                                         |
      | a         | [ "Arcane", "Avengers: Endgame"]                                 |