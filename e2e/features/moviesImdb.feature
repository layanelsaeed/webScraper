@ImdbScrap
Feature: Getting Top 100 Movies 
  I want to make sure /getMoviesIMDB operation through REST API works fine

  Scenario Outline: get movies by firstCharacter
    Given A firstCharacter <char> exist
    When I send GET request to /getMoviesIMDB
    Then I receive <response> 

    Examples:
      | firstCharacter | response                                                                |
      | s              | {"Schindler's List", "Star Wars: Episode V - The Empire Strikes Back" } |