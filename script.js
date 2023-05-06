const palettePenColour = document.querySelector('.settings__pen-colour__color');
const buttonPenColour = document.querySelector('.settings__pen-colour')
const buttonClear = document.querySelector('.settings__clear');
const buttonOffGrid = document.querySelector('.settings__grid');
const buttonBackgroundColor = document.querySelector('.settings__background-colour__color');
const buttonEraser = document.querySelector('.settings__eraser');
const buttonRainbow = document.querySelector('.settings__rainbow');
const easelGrid = document.querySelector('.easel__grid');
const slider = document.querySelector('.settings__grid-size__slider');

let isGrid = false;
let isEraser = false;
let isRainbow = false;
let colorEaselGridItem = 'black';
createGrid();
slider.addEventListener('input', createGrid);
buttonClear.addEventListener('click', createGrid);
palettePenColour.addEventListener('input', changeColour);
buttonPenColour.addEventListener('click', changeColour);
buttonOffGrid.addEventListener('click', changeGrid);
buttonBackgroundColor.addEventListener('input', setBackgroundColor);
buttonEraser.addEventListener('click', setEraser);
buttonRainbow.addEventListener('click', setRainbow);

function createGrid() {
    let val = slider.value;
    removeElement(easelGrid);
    setSizeEaselGrid(val);
    fillEaselGrid(val);
}

function removeElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function setSizeEaselGrid(val) {
    easelGrid.setAttribute('style',
        `grid-template-columns: repeat(${val}, 2fr); 
         grid-template-rows: repeat(${val}, 2fr);`);
}

function fillEaselGrid(val) {
    for (let i = 0; i < Math.pow(val, 2); i++) {
        easelGrid.appendChild(addConfiguredEaselGridItem());
    }
}

function addConfiguredEaselGridItem() {
    const easelGridItem = document.createElement('div');
    setConfigEaselGridItem(easelGridItem);
    return easelGridItem;
}

function setConfigEaselGridItem(easelGridItem) {
    easelGridItem.classList.add('grid__item');
    easelGridItem.style.border = isGrid ? 'black 1px solid' : '';
    easelGridItem.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = isRainbow ? getRandomColor() : colorEaselGridItem;
    })
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColour() {
    isEraser = false;
    isRainbow = false;
    colorEaselGridItem = palettePenColour.value;
}

function changeGrid() {
    isGrid = !isGrid;
    value = isGrid ? '1px black solid' : '';
    changeBorderGrid(value);
}

function changeBorderGrid(value) {
    let allGridItems = document.querySelectorAll('.grid__item');
    for (item of allGridItems) {
        item.style.border = value;
    }
}

function setBackgroundColor() {
    easelGrid.style.backgroundColor = buttonBackgroundColor.value;
}

function setEraser() {
    isEraser = !isEraser;
    colorEaselGridItem = isEraser ? '#11ffee00' : palettePenColour.value;
}

function setRainbow() {
    isRainbow = !isRainbow;
}