import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

addEventListener(`submit`, onSubmitButton);

function onSubmitButton(event) {
  event.preventDefault();
  let position = 0;
  let delay = Number(formEl.elements.delay.value);
  let step = Number(formEl.elements.step.value);
  let amount = Number(formEl.elements.amount.value);
  for (let i = 1; i <= amount; i += 1) {
    position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
  formEl.reset();
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
