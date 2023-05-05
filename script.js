function getGridElement(width, height) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.style.width = `${width}px`;
    gridElement.style.height = `${height}px`;
    return gridElement;
}

const sketch = document.querySelector('.sketch');
let count = (sketch.offsetWidth * sketch.offsetHeight) / 256;
console.log(count);
for (let i = 0; i < count; i++) {
    sketch.appendChild(getGridElement(16, 16));
}
