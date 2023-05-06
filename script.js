const easel = document.querySelector('.sketch');
function getGridItem(width, height) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-element');
    gridItem.style.width = `${width}px`;
    gridItem.style.height = `${height}px`;
    return gridItem;
}

function getAmountGridItems() {
    let count = (easel.offsetWidth * easel.offsetHeight) / 256;
    return count;
}

let count = getAmountGridItems();
console.log(count);
for (let i = 0; i < count; i++) {
    easel.appendChild(getGridItem(16, 16));
}
