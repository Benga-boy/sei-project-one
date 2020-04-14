function init() {
  // DOM ELEMENTS
  const grids = document.querySelector('.grid')
  const startBtn = document.querySelector('#start')
  const curPlayer = document.querySelector('#current-player')
  let fields = document.querySelectorAll('.grid div')

  // PLAYER CHOICE VARIABLES
  // * Assigns team values to player 1 and player 2
  class Player {
    constructor(team) {
      this.team = team
      this.plays = 0
    }
  }

  const player1 = new Player('arsenal')
  const player2 = new Player('spurs')

  let currentPlayer

  if (curPlayer.textContent === 'arsenal') {
    currentPlayer = 'arsenal'
  } else {
    currentPlayer = 'tottenham'
  }


  // FUNCTIONS
  class Grid {
    constructor(rows, itemsInRows) {
      this.grid = new Array(rows)

      for (let i = 0; i < this.grid.length; i++){
        this.grid[i] = new Array(itemsInRows)
      }
      this.grid.forEach(row => {
        for (let i = 0; i < row.length; i++){
          row[i] = document.createElement('div')
          row[i].textContent = i + 'a'
          grids.appendChild(row[i])
        } 
      })

    }
    addValue(x, y, player){
      if (this.grid[x]  && this.grid[x][y]){
        console.log('The slot is already occupied')
        return
      } else if (x > 0 && this.grid[x - 1][y] === undefined) {
        console.log('The slot below isnt empty')
        return
      } else {
        this.grid[x][y].classList.add(currentPlayer)
        player.plays++
      }
    }
  }

  const gridCreator = new Grid(6, 7)

  //* Function and array of winning combinations to check if there is a winner


  // * Function to start the games
  function gameStart() {
    startBtn.classList.add('hidden')
  }

  // * Team selection function

  //Function when hovering over the grids
  function hoverBoard(event) {
    fields = event.target.classList.add('football')
  }

  function hoverOut(event) {
    fields = event.target.classList.remove('football')
  }

  // Function to add team logo to board

  function onCellClick(event) {
    fields = event.target.classList.add(currentPlayer) 
    console.log(fields.indexOf())
    // - added from player choice variable depending on team selection
  }

  // EVENT LISTENERS
  startBtn.addEventListener('click', gameStart) // - starts the game 
  
  grids.addEventListener('mouseover',  hoverBoard)
  grids.addEventListener('mouseout', hoverOut)
  grids.addEventListener('click', onCellClick)
  
}

window.addEventListener('DOMContentLoaded', init)