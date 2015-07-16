# c5_memory_match
Memory Match game, similar to Concentration

##Design Document - <a href="https://drive.google.com/open?id=0B7eOl4joefDuczZ3Ul9sbFFPZTA" target="_blank">Found Here</a>

##Scope -
- Static Mockup
  - Basic skeleton with
    - header
    - info section
    - game area
- Version .05.1
  - One card with
    - card container
    - card front
    - card back
  - Ability to reveal the front card face when clicking on the back card face
- Version .05.2
  - Add a second card
  - Ensure that both cards reveal correctly
- Version .05.3
  - Determine whether the first or second card is clicked
  - if the first card, store the front image src attribute into a variable
  - if the second card, compare the first card's front image source with the current card's front image source
- Version .05.4
  - Add a third card with a different background image
  - If 2 matching cards are clicked, indicate a match in console
  - If 2 unmatching cards are clicked, indicate a mismatch in console
  - You do NOT have to do yet:
    - be able to correctly click all 3 cards
    - make the cards flip back after mismatch
