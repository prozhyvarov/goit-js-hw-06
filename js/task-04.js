// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);

const counterValueSpan = document.querySelector('#value');
// console.log(counterValueSpan);

decrementBtn.addEventListener('click', logMessageDecr);

function logMessageDecr() {
    counterValue -= 1;
    counterValueSpan.textContent = counterValue;
}

incrementBtn.addEventListener('click', logMessageIncr);

function logMessageIncr() {
  counterValue += 1;
  counterValueSpan.textContent = counterValue;
}