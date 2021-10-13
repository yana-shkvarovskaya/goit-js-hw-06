function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const allInputs = document.querySelector('#controls input');
const allBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')


function createBoxes(amount){
  const initialsize = 30;
  for(let i =0; i < amount; i += 1) {
  let newBox = document.createElement('div');
  newBox.style.width = `${initialsize + 10 * i}px`;
  newBox.style.height = `${initialsize + 10 * i}px`;
  newBox.style.backgroundColor = getRandomHexColor();

  allBoxes.append(newBox);

}
}

let actualNumber;

allInputs.addEventListener('change', (number) => {
  actualNumber = allInputs.value;
})


btnCreate.addEventListener('click', () => createBoxes(actualNumber));


btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  allBoxes.innerHTML = '';
}