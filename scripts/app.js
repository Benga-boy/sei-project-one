function init() {
  // DOM ELEMENTS
  const grid = document.querySelector('.grid')
  const startBtn = document.querySelector('#start')
  const teamBtns = document.querySelectorAll('.team-button')
  const cells = []

  console.log(teamBtns)

  // GRADE VARIABLES
  const width = 7
  const cellCount = width * width


  //FUNCTIONS
  function createCells() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cell.textContent = i
      cells.push(cell)
    }
  }

  function gameStart() {
    console.log('start game')
    startBtn.classList.add('hidden')
  }


  function teamSelect(){
    const arsenal = document.querySelector('#gooner')
    console.log(arsenal)
    const tottenham = document.querySelector('#spurs')
    console.log(tottenham)
  }


  createCells()

  // EVENT LISTENER
  startBtn.addEventListener('click', gameStart)
  teamBtns.forEach(btn => {
    btn.addEventListener('click', teamSelect)
  })
  
}

window.addEventListener('DOMContentLoaded', init)