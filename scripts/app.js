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

  // PLAYER VARIABLES
  // const player = 0
  // const pc = 0


  //FUNCTIONS
  function createCells() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grids.appendChild(cell)
      cell.textContent = i
      cells.push(cell)
      // cells.forEach(cell => {
      //   cell.classList.add('field')
      // })
    }
  }
  // * Function to start the game
  function gameStart() {
    console.log('start game')
    startBtn.classList.add('hidden')
  }

  // * Team selection function
  function teamSelect(event){
    const arsenal = event.target.value
    const tottenham = event.target.value
  }

  //Function when hovering over Divs
  function hoverBoard(event) {
    // console.log('works', event.target.textContent)
    fields = event.target.classList.add('test')
    // console.log(fields.textContent)
  }

  function hoverOut(event) {
    fields = event.target.classList.remove('test')
  }

  // EVENT LISTENERS
  startBtn.addEventListener('click', gameStart)
  teamBtns.forEach(btn => {
    btn.addEventListener('click', teamSelect)
  })

  grids.addEventListener('mouseover', hoverBoard)
  grids.addEventListener('mouseout', hoverOut)

  // fields.forEach(field =>{
  //   field.addEventListener('mouseover', hoverBoard)
  // })

  createCells()
  
}

window.addEventListener('DOMContentLoaded', init)