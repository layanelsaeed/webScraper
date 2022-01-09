@WikipediaScrap
Feature: Getting movies that won the Oscars  
  I want to make sure /getMoviesOscars operation through REST API works fine

  Scenario Outline: get movies by firstCharacter
    Given A firstCharacter <character> exist
    When I send GET request to /getMoviesOscars
    Then I receive <response> 

    Examples:
      | firstCharacter | response                                                                                         |
      | t              | {"The Shape of Water", "The Artist", "The King's Speech", "The Hurt Locker"}                     |   
