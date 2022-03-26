const grid = document.querySelector('.grid-container');
const gridSize = document.querySelector('#grid-size');
const resetBtn = document.querySelector('.reset');

const createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add("square")
        grid.appendChild(div);
    }
};

createGrid();

const updateGrid = () => {
    grid.innerHTML = "";
    grid.style["grid-template-columns"] = `repeat(${gridSize.value}, 1fr)`;
    grid.style["grid-template-rows"] = `repeat(${gridSize.value}, 1fr)`;
    
    for (let i = 0; i < gridSize.value * gridSize.value; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
};

const randomBgColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return `rgb(${x}, ${y}, ${z})`;
};

const square = document.querySelector('div');
square.addEventListener('mouseover', e => {
    e.target.style["background-color"] = randomBgColor();
});

gridSize.addEventListener('change', updateGrid);

resetBtn.addEventListener('click', () => {
    grid.innerHTML = "";
    gridSize.value = "";
    grid.style["grid-template-columns"] = `repeat(16, 1fr)`;
    grid.style["grid-template-rows"] = `repeat(16, 1fr)`;
    createGrid();
});


