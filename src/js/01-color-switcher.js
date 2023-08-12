const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

function onStart() {
  disabler(refs.stop, refs.start);
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  disabler(refs.start, refs.stop);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function disabler(start, stop) {
  stop.setAttribute('disabled', 1);
  start.removeAttribute('disabled');
}
