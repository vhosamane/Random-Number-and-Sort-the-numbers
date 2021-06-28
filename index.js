const number__list = document.querySelector('#numberList');
const shuffle__button = document.querySelector("#shuffleButton");
const sort__button = document.querySelector("#sortButton");

window.addEventListener('resize', windowResizeEvent);
shuffle__button.addEventListener('click', shuffleNumberList);
sort__button.addEventListener('click', sortNumberList);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const colors = ['#72C3DC', '#2B8EAD', '#6F98A8', '#BFBFBF', '#2F454E'];

window.addEventListener('load', function () {

    createNumberList(numbers);
});

function windowResizeEvent() {
    applyBackgroundColors();
}

function createNumberList(numbers) {
    let output = '';
    if (numbers.length > 0) {
        numbers.forEach((number) => {
            output += `
                <li>${number}</li>
            `
        });
    }

    number__list.innerHTML = output;
    applyBackgroundColors();
}

function shuffleNumberList() {

    const list = numbers.sort(() => Math.random() - 0.5);
    createNumberList(list);
    numbers = list;
}

function sortNumberList() {
    
    const sortList = numbers.sort();
    createNumberList(sortList);
    numbers = sortList;
}

function applyBackgroundColors() {
    let lists = document.querySelectorAll('li');
    let width = window.screen.width;
    if (width > 900) {
        lists.forEach(ele => {
            let rand = colors[Math.floor(Math.random() * colors.length)];
            ele.style.backgroundColor = rand;
        });
    } else {
        lists.forEach(ele => {
            let rand = colors[Math.floor(Math.random() * colors.length)];
            ele.style.borderColor = rand;
        });
    }
}