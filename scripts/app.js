function init() {
  // DOM ELEMENTS
  const grids = document.querySelector('.grid')
  const startBtn = document.querySelector('#start')
  const curPlayer = document.querySelector('#current-player')
  const curPlay = document.querySelector('#current-plays')
  const scoreFirstPlayer = document.querySelector('#player1-score')
  const scoreSecondPlayer = document.querySelector('#player2-score')
  const timer = document.querySelector('#count')

  //* TIMER - Still needs to be linked to the game playing function
  const startTime = 5
  let time = startTime * 60

  function countDown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = (seconds < 10) ? '0' + seconds : seconds
    timer.textContent = `${minutes}:${seconds}`
    time--
  }

  // PLAYER CHOICE VARIABLES
  // * Assigns team values to player 1 and player 2
  class Player {
    constructor(team) {
      this.team = team
      this.plays = 0
      this.score = 0
    }
  }

  const player1 = new Player('Arsenal')
  const player2 = new Player('Spurs')

  let currentPlayer = player1
  
  let previousPlayer = player2
  

  // FUNCTIONS
  // * 2D array to create my grid in my html
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


  const gridCreator = new Grid(6, 7)

  //* Function and array of winning combinations to check if there is a winner

  function chkLine(a,b,c,d) {
    console.log(a)
    const check = ((a.className !== '') && (a.className === b.className) && (a.className === c.className) && (a.className === d.className))
    return check
  }

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


  // * Function to start the games
  function gameStart() {
    startBtn.classList.add('hidden')
    setInterval(countDown, 1000)
  }

  // * Team selection function

  //Function when hovering over the grids
  function hoverBoard(event) {
    // event.target.classList.add('football')
    event.target.setAttribute('showFootball', 'true')
  }

  function hoverOut(event) {
    // event.target.classList.remove('football')
    event.target.setAttribute('showFootball', 'false')
  }

  // Function to add team logo to board

  function onCellClick(event) {
    const xCord = parseInt(event.target.getAttribute('x')) 
    const yCord = parseInt(event.target.getAttribute('y')) 
    gridCreator.addValue(xCord, yCord)
    chkWinner(gridCreator.grid)
  }

  // EVENT LISTENERS
  startBtn.addEventListener('click', gameStart) // - starts the game 
  
  grids.addEventListener('mouseover',  hoverBoard)
  grids.addEventListener('mouseout', hoverOut)
  grids.addEventListener('click', onCellClick)
  
}

window.addEventListener('DOMContentLoaded', init)
