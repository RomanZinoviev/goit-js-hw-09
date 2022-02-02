import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from "flatpickr";

const inputDateTime = document.querySelector("#datetime-picker");
const startButtonEl = document.querySelector("button[data-start]");
const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector("span[data-hours]");
const minutesEl = document.querySelector("span[data-minutes]");
const secondsEl = document.querySelector("span[data-seconds]");
const date = new Date();
let needDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {    
      console.log(selectedDates[0]);
      if (selectedDates[0].getTime() < date.getTime()) {
          window.alert("Please choose a date in the future");          
      } else {
          startButtonEl.disabled = false;
        };
        const timeToAction = convertMs(selectedDates[0].getTime() - date.getTime());
        const { days, hours, minutes, seconds } = timeToAction;
        
        const startTimerHandle = () => { 
         daysEl.textContent=days    
};
        
        startButtonEl.addEventListener("click", startTimerHandle);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



startButtonEl.disabled = true;
flatpickr("input#datetime-picker", options);

console.log(daysEl)


