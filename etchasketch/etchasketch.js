const container = document.querySelector('.container');
const root = document.documentElement;

let gridSize = 16
root.style.setProperty('--grid-size', gridSize);

function generateGrid(size) {
    container.innerHTML = '';
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) { // Use a different variable name for the outer loop
        for (let colIndex = 0; colIndex < gridSize; colIndex++) { // Use a different variable name for the inner loop
            const column = document.createElement('div');
            column.classList.add('column');
            container.appendChild(column);
        }
    }
}

generateGrid(gridSize);

const button = document.querySelector('.gridSize')

button.addEventListener('click', () => {
  let newGrid = prompt('Dimensions for next grid are X by X. Choose a number X:');
  while (isNaN(newGrid) || newGrid <= 0) {
    newGrid = prompt('X must be a positive number. Please enter a number X:');
  }
  newGrid = parseInt(newGrid); // Convert string to integer
  gridSize = newGrid; // Update the grid size variable
  root.style.setProperty('--grid-size', gridSize); // Apply the new size to CSS

  generateGrid(gridSize); // Regenerate the grid with the new size

  const divs = document.querySelectorAll('.container div');
  divs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.style.background = "#AA0000";
    });
});
});

const divInContainer = document.querySelectorAll('.container div');
// Add event listener to each div
divInContainer.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.background = "#AA0000";
    });
});