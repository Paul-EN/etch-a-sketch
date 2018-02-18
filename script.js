window.onload = function etchASketch() {

  function setTitle(name) {
    let titleCont = document.createElement('title');
    titleCont.textContent = `${name}`;
    document.head.appendChild(titleCont);
  }

  function createContainer(name, parent) {
    let container = document.querySelector(`${parent}`)
    let divCont = document.createElement('div');
    divCont.setAttribute('id', `${name}`);
    container.appendChild(divCont);
  }

  function createSubContainer(name, parent) {
    let container = document.querySelector(`${parent}`)
    let divCont = document.createElement('div');
    divCont.setAttribute('class', `${name}`);
    container.appendChild(divCont);
  }

  function createBox(name, parent) {
    let container = document.querySelector(`${parent}`);
    let box = document.createElement('div');
    box.classList.add(`${name}`);
    container.appendChild(box);
  }

  function clearBox(parent) {
    let container = document.querySelector(`${parent}`);
    let box = document.createElement('div');
    box.classList.add('clear')
    container.appendChild(box);
  }

  function createGrid(name, parent, width, height) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        createBox(name, parent);
      }
      clearBox(parent);
    }
  }

  function changeColor() {
    function addEvent(boxHover) {
      boxHover.addEventListener('mouseover', function() {
        boxHover.style.backgroundColor = 'red';
      });
    }

    let boxes = document.getElementsByClassName('box');
    for (let a = 0; a < boxes.length; a++) {
      addEvent(boxes[a]);
    }
  }

  setTitle('Etch-a-Sketch')
  createContainer('header', 'body');
  createContainer('grid-container', 'body');
  createSubContainer('main-grid', '#grid-container')
  createGrid('box', '.main-grid', 16, 16);
  changeColor();
}
