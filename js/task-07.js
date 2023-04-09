// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const rangeInput = document.querySelector('#font-size-control');
console.log(rangeInput);

const spanEl = document.querySelector('#text');
console.log(spanEl);

const textSizing = () => {
    spanEl.style.fontSize = `${rangeInput.value}px`;
}

rangeInput.addEventListener('input', textSizing);
