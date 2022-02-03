import Notiflix from 'notiflix';

const inputStepEl = document.querySelector("input[name=step]");
const inputDelayEl = document.querySelector("input[name=delay]");
const inputAmountEl = document.querySelector("input[name=amount]");
const formEl = document.querySelector(".form");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      } else {
       reject (Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
      }
    }, delay)})
};
const handleForm = (event) => { 
  event.preventDefault();
  for (let i = 1; i <=inputAmountEl.value ; i++) {
     setTimeout(() => {
   createPromise(i, inputStepEl.value).then(value=>{value}).catch(error=>{error})
 },inputDelayEl.value)    
  }    
};

formEl.addEventListener("submit", handleForm)

