const inputMove = document.querySelector('#font-size-control');
const inputTextSize = document.querySelector('#text');

inputMove.addEventListener('change', onInputMove);

function onInputMove(){
inputTextSize.style.fontSize = `${inputMove.value}px`;
}