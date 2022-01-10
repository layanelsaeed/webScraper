@WikipediaScrap
Feature: Getting movies that won the Oscars  
  I want to make sure /oscars operation through REST API works fine

  Scenario Outline: get movies that won the Oscars by firstCharacter
    Given A firstCharacter <character> exist
    When I send GET request to /oscars
    Then I receive <response> 

    Examples:
      | character | response                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
      | t         | ["The Shape of Water", "The Artist", "The King's Speech", "The Hurt Locker", "The Departed", "The Lord of the Rings: The Return of the King", "Titanic", "The English Patient", "The Silence of the Lambs", "The Last Emperor", "Terms of Endearment", "The Deer Hunter", "The Godfather Part II", "The Sting", "The Godfather", "The French Connection", "The Sound of Music", "The Apartment", "The Best Years of Our Lives", "The Bridge on the River Kwai", "The Broadway Melody", "The Great Ziegfeld", "The Greatest Show on Earth", "The Life of Emile Zola", "The Lost Weekend", "Tom Jones" ]  |
      