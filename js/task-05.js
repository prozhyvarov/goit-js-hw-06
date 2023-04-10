// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onInputChange)
// console.log(refs.inputEl);
// console.log(refs.nameEl);
function onInputChange(event) {
    // console.log(event.currentTarget.value);
    refs.nameEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        refs.nameEl.textContent = 'Anonymous';
      }
}

