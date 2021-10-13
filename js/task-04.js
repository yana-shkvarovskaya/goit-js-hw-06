let counterValue = 0;

const addValueBtn = document.querySelector('[data-action="increment"]');
const removeValueBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

addValueBtn.addEventListener("click", (event) => {
  counterValue += 1;
  value.textContent = counterValue;
});

removeValueBtn.addEventListener("click", (event) => {
  counterValue -= 1 && counterValue >= 1; // чтоб значение не опускалось ниже 0
  value.textContent = counterValue;
});
