const buttonClear = document.querySelector('.settings__clear');
const buttonPenColour = document.querySelector('.settings__pen-colour__color');
const buttonOffGrid = document.querySelector('.settings__grid');
const easelGrid = document.querySelector('.easel__grid');
const slider = document.querySelector('.settings__grid-size__slider');

let isGrid = false;
let colorEaselGrid = 'black';
createGrid();
slider.addEventListener('input', createGrid);
buttonClear.addEventListener('click', createGrid);
buttonPenColour.addEventListener('input', changeColour);
buttonOffGrid.addEventListener('click', changeGrid);

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
        e.target.style.backgroundColor = colorEaselGrid;
    })
}

function changeColour() {
    colorEaselGrid = buttonPenColour.value;
    console.log(buttonPenColour.value);
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