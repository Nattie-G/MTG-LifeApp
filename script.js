const p1LifeElement = document.querySelector('[data-life-total-p1]');
const p1ButtonMinus = document.querySelector('[data-btn-minus-p1]');
const p1ButtonPlus = document.querySelector('[data-btn-plus-p1]');

const p2LifeElement = document.querySelector('[data-life-total-p2]');
const p2ButtonMinus = document.querySelector('[data-btn-minus-p2]');
const p2ButtonPlus = document.querySelector('[data-btn-plus-p2]');

function incrementLifeP1(_) {
    p1LifeElement.innerText = parseInt(p1LifeElement.innerText) + 1;
}

function decrementLifeP1(_) {
    p1LifeElement.innerText = parseInt(p1LifeElement.innerText) - 1;
}

function incrementLifeP2(_) {
  p2LifeElement.innerText = parseInt(p2LifeElement.innerText) + 1;
}

function decrementLifeP2(_) {
  p2LifeElement.innerText = parseInt(p2LifeElement.innerText) - 1;
}


p1ButtonPlus.addEventListener('click', incrementLifeP1);
p1ButtonMinus.addEventListener('click', decrementLifeP1);

p2ButtonPlus.addEventListener('click', incrementLifeP2);
p2ButtonMinus.addEventListener('click', decrementLifeP2);


// service worker
window.addEventListener('load', () => {
    registerSW();
  });

  // Register the Service Worker
  async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator
              .serviceWorker
              .register('serviceworker.js');
      }
      catch (e) {
        console.log('SW registration failed');
      }
    }
  }