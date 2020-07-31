# sei-project-one - CONNECT 4 GAME

## Deployed Project: https://bit.ly/31Z1cv8

## Technologies - HTML, CSS & JAVASCRIPT

## OBJECTIVE - 
Connect 4 Game - I have seven days to complete this project

This is my first project on the SEI course and my aim is to recreate the popular Connect 4 game using HTML, CSS and Javascript.
I have decided to go with a football theme, using the North London derby as my theme.

## DAY ONE - 

My first task was creating the grids for the game board. A task which I completed on the first day using a DOM and a for loop.

This is by far a key element to the game and it was a pretty straight forward task to complete. 

I then used the DOM once again to add team selectors for each player to choose a team which also went well.

My first few days have been plain sailing, I have been able to replicate a lot of the things I learned in class and things are looking good.

I watched a few YouTube videos to get inspiration for my game logic, one especially from an ex GA student who made a video of how she went about making her game Link - https://www.youtube.com/watch?v=dBlSiGOFjUY&t=285s. I didnt end up going down the same route she did but it was good to see and inspiring

## DAY TWO - 

Kept coding and working on building the grid for my game, whilst doing more research on how to tackle the game logic but didnt find much online. Guess its not a very popular game

## DAY 3

Day three and it is now time to start writing code for my game logic. Where do I start ? 🤔

I tried a few different methods to write the game logic to no avail. I kept on going however and doing research onine but once again there wasnt much out there. 
I then spoke with my brother who was a Developer himself in the past. He assured me not to worry too much and advised restarting the whole project using a Class based component in order to get used to OOP, which is what is mostly used in the real world.

I was excited, especially after hearing that this was used a lot in the real world. I did a lot of reading on Medium, watched YouTube videos and referred back to my lecture workshops to help me gain a better understanding on how to get started. 

This whole experience will go on to serve the future me well when using React for example which is based a lot around Classes and I was happy things went the way they did in the end.

## BACK TO DAY ONE
I started my project all over again on the eve of the third day, even with the time constraints with only having another 3 to 4 days left. I started off with building my grid now using a 2d array based on the advice of my brother who also advised on using Classes as thats what is used in real world environment. I was excited as speaking with some of my classmates, I was the only one using a 2d array to build my grid. I knew this will be difficult but I was going to learn a lot during my research process. 

Building the grid once again was pretty straight forward using a Class, I was amazed at how quick this was using just the new and Array keywords. 
```
  class Grid {
    constructor(rows, cols) {
      this.grid = new Array(rows) // 6 rows

      for (let i = 0; i < this.grid.length; i++) { // 7 columns
        this.grid[i] = new Array(cols)
      }

      this.grid.forEach((row, index) => {
        for (let i = 0; i < row.length; i++){
          row[i] = document.createElement('div')
          row[i].setAttribute('x', index)
          row[i].setAttribute('y', i)
          grids.appendChild(row[i])
        } 
      })

    }

    addValue(x, y){
      // Need to check if a cell already contains a class of either Arsenal or Tottenham
      if (this.grid[x][y].classList.contains('Arsenal') || this.grid[x][y].classList.contains('Spurs')){
        alert('The slot is already occupied')
        return
      } else if (x < 5 && (!(this.grid[x + 1][y].classList.contains('Arsenal') || this.grid[x + 1][y].classList.contains('Spurs')))) {
        alert('The slot below isnt empty')
        return // Check if a cell below is empty 
      } else {
        this.grid[x][y].classList.add(currentPlayer.team)
        currentPlayer.plays++
        currentPlayer = (currentPlayer === player1) ? player2 : player1 // * if Current player is player1, switch current player to player2
        curPlay.textContent = currentPlayer.plays
        previousPlayer = (previousPlayer === player2) ? player1 : player2 // * By declaring this, I am trying to set up a winner below
        curPlayer.textContent = currentPlayer.team
      } 
    } 
  }
```

I had another plain sailing 24 hours and I was happy to have a grid, a ball that hovers through the grid and to be able to place counters on the the board.

```
  function hoverBoard(event) {
    // event.target.classList.add('football')
    event.target.setAttribute('showFootball', 'true')
  }
```

## REST OF THE WEEK
However I struggled to access the grids in order to be able to display the current player. After multiple attempts I figured that my biggest mistake was not console logging, a rookie mistake that will go on to shape the rest of my time on the course and career.

I finally figured out by the fifth day how classes and constructuctors work. I was also happy with being able to place player counters on the board and displaying who the current player is, so that they know it was their turn. 

I just now had to right the game logic, I was already at this stage on the third day but I had no clue where to start and it was still the same situation at this point. I did some googling online and came across an example on Stackoverflow which I used and had to tweak slightly for my game. This worked out just fine and confirmed what I had been told a lot, that the industry is filled with helpful and useful tips because others out there have probably faced the same problems and they share it. 

```
  function chkWinner(bd) {
    // console.loga.getAttribute('class')(bd)
    //* CHECK DOWN

    for (let r = 0; r < 3; r++){
      for (let c = 0; c < 7; c++){
        if (chkLine(bd[r][c], bd[r + 1][c], bd[r + 2][c], bd[r + 3][c])){
          if (previousPlayer.team === 'Arsenal'){
            alert('Arsenal Wins')
            previousPlayer.score++
            scoreFirstPlayer.textContent = previousPlayer.score
          } else {
            alert('Tottenham Wins')
            previousPlayer.score++
            scoreSecondPlayer.textContent = previousPlayer.score
          }
        }
      }
    }

    //* CHECK RIGHT

    for (let r = 5; r >= 0; r--){
      for (let c = 0; c < 4; c++){
        if (chkLine(bd[r][c], bd[r][c + 1], bd[r][c + 2], bd[r][c + 3])) {
          if (previousPlayer.team === 'Arsenal'){
            alert('Arsenal Wins')
            // confirm('Contiunue Playing?')
            // if (confirm('Continue Playing')){
            //   gridCreator.addValue = null
            // }
            previousPlayer.score++
            scoreFirstPlayer.textContent = previousPlayer.score
          } else {
            alert('Tottenham Wins')
            previousPlayer.score++
            scoreSecondPlayer.textContent = previousPlayer.score
          } 
        }
      }
    }

    //* CHECK DOWN-RIGHT
    for (let r = 0; r < 3; r++){
      for (let c = 0; c < 4; c++){
        if (chkLine(bd[r][c], bd[r + 1][c + 1], bd[r + 2][c + 2], bd[r + 3][c + 3])){
          if (previousPlayer.team === 'Arsenal'){
            alert('Arsenal Wins')
            previousPlayer.score++
            scoreFirstPlayer.textContent = previousPlayer.score
          } else {
            alert('Tottenham Wins')
            previousPlayer.score++
            scoreSecondPlayer.textContent = previousPlayer.score
          }
        }
      }
    }

    //* CHECK DOWN-LEFT
    for (let r = 3; r < 6; r++){
      for (let c = 0; c < 4; c++){
        if (chkLine(bd[r][c], bd[r - 1][c + 1], bd[r - 2][c + 2], bd[r - 3][c + 3])){
          if (previousPlayer.team === 'Arsenal'){
            alert('Arsenal Wins')
            previousPlayer.score++
            scoreFirstPlayer.textContent = previousPlayer.score
          } else {
            alert('Tottenham Wins')
            previousPlayer.score++
            scoreSecondPlayer.textContent = previousPlayer.score
          }  
        }
      }
    }
    return 'Draw'
  }
```

My game is now working properly and fully functioning by the last day and I am happy with it. All thats left to do is to add some styling to it.

## KEY LEARNINGS -

* HTML
* CSS
* JavaScript

This has been a tough seven days but I am glad my first real taste of creating an app went the way it did. It was tough and I had a huge mountain to climb but it definitely shaped the way I think about and approach things. One of the key things I learned is the importance of console logging before passing a value to a component and how classes work. This will go on to benefit the future me when we started working with React. 

All in all a very good experience and project, plus I was very happy with the code I wrote especially after receiving praise from the instructor as he said he hadn’t seen many new comers do this with connect 4 on the course.
