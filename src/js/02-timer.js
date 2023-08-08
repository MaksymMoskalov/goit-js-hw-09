import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  start: document.querySelector('button[data-start]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      window.alert('Please choose a date in the future');
      refs.start.setAttribute('disabled', 1);
      return;
    }
    let timerId = null;
    refs.start.removeAttribute('disabled');
    refs.start.addEventListener('click', () => {
      timerId = setInterval(() => {
        const difference = selectedDates[0].getTime() - Date.now();
        const data = convertMs(difference);
        if (
          data.days === '00' &&
          data.hours === '00' &&
          data.minutes === '00' &&
          data.seconds === '00'
        ) {
          clearInterval(timerId);
          refs.start.setAttribute('disabled', 1);
        }
        updateMarkup(data);
      }, 1000);
    });
  },
};
refs.start.setAttribute('disabled', 1);

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateMarkup({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
