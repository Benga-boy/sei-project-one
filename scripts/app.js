function init() {
  // DOM ELEMENTS
  const grids = document.querySelector('.grid')
  const startBtn = document.querySelector('#start')
  const curPlayer = document.querySelector('#current-player')

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

  const currentPlayer = player1

  // FUNCTIONS
  class Grid {
    constructor(rows, itemsInRows) {
      this.grid = new Array(rows)

      for (let i = 0; i < this.grid.length; i++){
        this.grid[i] = new Array(itemsInRows)
      }
      this.grid.forEach((row, index) => {
        for (let i = 0; i < row.length; i++){
          row[i] = document.createElement('div')
          row[i].setAttribute('x', index)
          row[i].setAttribute('y', i)
          row[i].textContent = i + 'a'
          grids.appendChild(row[i])
        } 
      })

    }
    addValue(x, y){
      if (this.grid[x][y].classList.contains('arsenal') || this.grid[x][y].classList.contains('tottenham')){
        alert('The slot is already occupied')
        return
      } else if (!this.grid[x + 1][y].classList.contains('arsenal') || !this.grid[x + 1][y].classList.contains('tottenham') ) {
        alert('The slot below isnt empty')
        return
      } else {
        this.grid[x][y].classList.add(currentPlayer.team)
        currentPlayer.plays++
        currentPlayer === player1 ? player2 : player1
        curPlayer.textContent = currentPlayer
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
    event.target.classList.add('football')
  }

  function hoverOut(event) {
    event.target.classList.remove('football')
  }

  // Function to add team logo to board

  function onCellClick(event) {
    // if (event.target.classList.contains('arsenal') || event.target.classList.contains('tottenham')){
    //   alert('invalid move')
    // } else {
    //   event.target.classList.add(currentPlayer.team) 
    const xCord = parseInt(event.target.getAttribute('x')) 
    const yCord = parseInt(event.target.getAttribute('y')) 
    gridCreator.addValue(xCord, yCord)
    
 
    // console.log(fields)
    // console.log(event)
  }

  // EVENT LISTENERS
  startBtn.addEventListener('click', gameStart) // - starts the game 
  
  grids.addEventListener('mouseover',  hoverBoard)
  grids.addEventListener('mouseout', hoverOut)
  grids.addEventListener('click', onCellClick)
  
}

window.addEventListener('DOMContentLoaded', init)