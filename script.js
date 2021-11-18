let mouseOverState = true;
let mouseClickState = false;

window.onload = function () {
    secondGrid();
    mouseOver();
};

const createSquare = () => {
    const container = document.querySelector('#square-container');
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
};

const container = document.querySelector('#square-container');
container.addEventListener('click', () => {
    mouseClickState ? mouseClickState = false : mouseClickState = true;
});

const mouseOver = () => {
    const grid = document.querySelectorAll('.square');
    grid.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (mouseClickState) {
                mouseOverState ? square.classList.add('square-hover') : square.classList.remove('square-hover');
            } else {
                return;
            }
        });
    });
};

const clearContainer = () => {
    const grid = document.querySelectorAll('.square');
    grid.forEach((square) => {
        square.remove();
    });
    mouseOverState = true;
};

const firstGrid = () => {
    clearContainer();
    for (let i = 0; i < 256; i++) {
        createSquare();
    };
    const grid = document.querySelectorAll('.square');
    grid.forEach((square) => {
        square.style.height = "25px";
        square.style.width = "25px";
    });
};

const secondGrid = () => {
    clearContainer();
    for (let i = 0; i < 576; i++) {
        createSquare();
    };
    const grid = document.querySelectorAll('.square');
    grid.forEach((square) => {
        square.style.height = "16.66px";
        square.style.width = "16.66px";
    });
};

const thirdGrid = () => {
    clearContainer();
    for (let i = 0; i < 1024; i++) {
        createSquare();
    };
    const grid = document.querySelectorAll('.square');
    grid.forEach((square) => {
        square.style.height = "12.5px";
        square.style.width = "12.5px";
    });
};

const fourthGrid = () => {
    clearContainer();
    for (let i = 0; i < 4096; i++) {
        createSquare();
    };
    const grid = document.querySelectorAll('.square');
    grid.forEach((square) => {
        square.style.height = "6.25px";
        square.style.width = "6.25px";
    });
};

let firstGridBtn = document.querySelector('#first-grid-btn');
firstGridBtn.addEventListener('click', () => {
    firstGrid();
    mouseOver();
});

let secondGridBtn = document.querySelector('#second-grid-btn');
secondGridBtn.addEventListener('click', () => {
    secondGrid();
    mouseOver();
});

let thirdGridBtn = document.querySelector('#third-grid-btn');
thirdGridBtn.addEventListener('click', () => {
    thirdGrid();
    mouseOver();
});

let fourthGridBtn = document.querySelector('#fourth-grid-btn');
fourthGridBtn.addEventListener('click', () => {
    fourthGrid();
    mouseOver();
});

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    const grid = document.querySelectorAll('.square');
    grid.forEach((square) => {
        square.classList.remove('square-hover');
    })
});

const eraserBtn = document.querySelector('#eraser-btn');
eraserBtn.addEventListener('click', () => {
    mouseOverState ? mouseOverState = false : mouseOverState = true;
});