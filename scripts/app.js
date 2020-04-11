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
  // * I want a player to be able to select between two teams, depending on who the player picks, the computer automatically picks opposite
  let player
  


  //FUNCTIONS
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

  //Function when hovering over Divs
  function hoverBoardArsenal(event) {
    fields = event.target.classList.add('football')
  }

  function hoverOutArsenal(event) {
    fields = event.target.classList.remove('football')
  }

  // ON CLICK

  function onCellClick(event) {
    fields = event.target.classList.add(player)
  }

  // EVENT LISTENERS
  startBtn.addEventListener('click', gameStart)
  teamBtns.forEach(btn => {
    btn.addEventListener('click', teamSelect)
  })

  grids.addEventListener('mouseover',  hoverBoardArsenal)
  grids.addEventListener('mouseout', hoverOutArsenal)
  grids.addEventListener('click', onCellClick)

  createCells()
  
}

window.addEventListener('DOMContentLoaded', init)