// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color 
// и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  textColor: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
};
// console.log(refs.textColor);
// console.log(refs.changeColorBtn);

refs.changeColorBtn.addEventListener('click', onBcgColorEl);

function onBcgColorEl() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.textColor.textContent = getRandomHexColor();
}