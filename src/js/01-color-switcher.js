const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

function onStart() {
  refs.start.setAttribute('disabled', 1);
  refs.stop.removeAttribute('disabled');
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  refs.stop.setAttribute('disabled', 1);
  refs.start.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
