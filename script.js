const p1LifeElement = document.querySelector('[data-p1-life-total]');
const p1ButtonMinus = document.querySelector('[data-btn-minus]');
const p1ButtonPlus = document.querySelector('[data-btn-plus]');

function incrementLife(_) {
    p1LifeElement.innerText = parseInt(p1LifeElement.innerText) + 1;
}

function decrementLife(_) {
    p1LifeElement.innerText = parseInt(p1LifeElement.innerText) - 1;
}

p1ButtonPlus.addEventListener('click', incrementLife);
p1ButtonMinus.addEventListener('click', decrementLife);