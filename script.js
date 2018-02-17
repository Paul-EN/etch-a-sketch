window.onload = function etchSketch() {

  function setTitle(name) {
    let titleCont = document.createElement('title');
    titleCont.textContent = `${name}`;
    document.head.appendChild(titleCont);
  }

  function createContainer(name) {
    let divCont = document.createElement('div');
    divCont.setAttribute('id', `${name}`);
    divCont.setAttribute('style', 'background-color: green');
    document.body.appendChild(divCont);
  }

  function createBox(parent, name) {
    let container = document.querySelector(`#${parent}`);
    let box = document.createElement('div');
    box.classList.add('name');
    box.setAttribute('style', 'height: 20px; width: 20px; background-color: blue; margin: 1px; float: left');
    container.appendChild(box);
  }

  function clearBox(parent) {
    let container = document.querySelector(`#${parent}`);
    let box = document.createElement('div');
    box.classList.add('clear')
    box.setAttribute('style', 'clear: both');
    container.appendChild(box);
  }

  function createGrid(parent, name, width, height) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        createBox(parent, name);
      }
      clearBox(parent);
    }
  }

  setTitle('Etch-a-Sketch')
  createContainer('main-grid');
  createGrid('main-grid', 'box', 16, 16)
}
