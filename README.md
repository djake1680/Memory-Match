# c5_memory_match
Memory Match game, similar to Concentration

##Design Document - <a href="https://drive.google.com/open?id=0B7eOl4joefDuczZ3Ul9sbFFPZTA" target="_blank">Found Here</a>

##Scope 

- Static Mockup
  - Basic skeleton with
    - header
    - info section
    - game area
  - File names:
    - index.html - the main file
    - main.js - the main javascript file, referenced from index.html
    - style.css - the main css file, referenced from index.html
### Version .5
- Version .5.1
  - One card with
    - card container
    - card front
    - card back
  - Ability to reveal the front card face when clicking on the back card face
- Version .5.2
  - Add a second card
  - Ensure that both cards reveal correctly
- Version .5.3
  - Determine whether the first or second card is clicked
  - if the first card, store the front image src attribute into a variable
  - if the second card, compare the first card's front image source with the current card's front image source
- Version .5.4
  - Add a third card with a different background image
  - If 2 matching cards are clicked, indicate a match in console
  - If 2 unmatching cards are clicked, indicate a mismatch in console
  - You do NOT have to do yet:
    - be able to correctly click all 3 cards
    - make the cards flip back after mismatch

## All version .5 files should be saved in prototype.html.  
- style and js should be in the same file.


#### Make a PULL-REQUEST for version .5.4 to your named branch on the LF c4_memory_match repo.

### Version 1.0
- Version 1.0.0
  - If the two cards match, apply some special visual effect, such as:
    - make the whole card disappear
    - highlight the card border in green
    - change the opacity of the whole card
  - if the cards do not match, flip the cards back
    - before you flip them back, perform an alert("They don't match") so you have time to see the cards before they flip back
      - We will do this in a better way later
  - reset your clicked card boolean tracker.  This will prepare your game for the next card pair click
  - add a 4th card.  This should give you 2 cards of each image.

#### Extra for 1.0:
- If you feel bold apply a css rotation for the flip, look up CSS animations, specifically transform: rotateY

### Version 1.5
- 18 (minimum) functioning cards
- Game win state - game should inform you when you have matched all cards
- Game reset button.  Game should be resettable.  Either by resetting the game board, or linking back to the same document to start the game over (reloading the page by linking to it).
- An accuracy counter (how many successful 2nd clicks divided by how many missed 2nd clicks)
- Implemented logo and theme of some sort

#### Make a PULL-REQUEST for version 1.5 to your named branch on the LF c4_memory_match repo.
