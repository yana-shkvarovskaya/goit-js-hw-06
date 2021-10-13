const textInput = document.querySelector('#validation-input');
let maxInputLength = textInput.dataset.length;

textInput.addEventListener('blur', onFocusInput);

function onFocusInput(){
if (textInput.value.length <= maxInputLength){
    textInput.setAttribute('class', 'valid');
} else
textInput.setAttribute('class', 'invalid');
}