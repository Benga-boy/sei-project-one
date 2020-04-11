function init() {
  // DOM ELEMENTS
  const grids = document.querySelector('.grid')
  const startBtn = document.querySelector('#start')
  const teamBtns = document.querySelectorAll('.team-button')
  const cells = []
  let fields = document.querySelectorAll('.grid div')

  // GRID VARIABLES
  const width = 7
  const cellCount = width * 6

  // PLAYER CHOICE VARIABLES
  // * Allows player to pick which team they want to be. Choice will be added fields class
  let player
  


  //FUNCTIONS
  // * Creates the playing grids - 6 by 7
  function createCells() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grids.appendChild(cell)
      cell.textContent = i
      cells.push(cell)
    }
  }

  // * Function to start the games
  function gameStart() {
    console.log('start game')
    startBtn.classList.add('hidden')
  }

  // * Team selection function
  function teamSelect(event){
    if (event.target.value === 'arsenal'){
      player = 'arsenal'
    } else {
      player = 'tottenham'
    }
  }

  //Function when hovering over the grids
  function hoverBoard(event) {
    fields = event.target.classList.add('football')
  }

  function hoverOut(event) {
    fields = event.target.classList.remove('football')
  }

  // Function to add team logo to board

  function onCellClick(event) {
    fields = event.target.classList.add(player)  // - added from player choice variable depending on team selection
  }

  // EVENT LISTENERS
  startBtn.addEventListener('click', gameStart) // - starts the game 
  
  teamBtns.forEach(btn => {
    btn.addEventListener('click', teamSelect) // event listener for team selection
  })

  grids.addEventListener('mouseover',  hoverBoard)
  grids.addEventListener('mouseout', hoverOut)
  grids.addEventListener('click', onCellClick)

  createCells()
  
}

window.addEventListener('DOMContentLoaded', init)