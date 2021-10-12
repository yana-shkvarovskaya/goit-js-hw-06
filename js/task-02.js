const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elementsList = document.querySelector('#ingredients');
elementsList.textContent = 'Ingredients:';


const elements = ingredients.map(ingredient => {
  let element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item');

  return element;
})

elementsList.append(...elements);






