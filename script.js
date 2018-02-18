function createContainer(idName, parent) {
  let container = document.querySelector(`${parent}`);
  let divContainer = document.createElement('div');
  divContainer.setAttribute('id', `${idName}`);
  container.appendChild(divContainer);
}

function createSubContainer(className, parent) {
  let container = document.querySelector(`${parent}`);
  let divContainer = document.createElement('div');
  divContainer.classList.add(`${className}`);
  container.appendChild(divContainer);
}

function createGrid(parent, height, width) {
  let grid = document.querySelector(`.${parent}`);
  grid.style.cssText = `grid-template: repeat(${height}, 1fr) / repeat(${width}, 1fr)`;
}

createContainer('main-container', 'body');
createSubContainer('grid-container', '#main-container');
createGrid('grid-container', 20, 20);
