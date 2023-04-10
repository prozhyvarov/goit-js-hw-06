// Задание 3
// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imageGalaryEl = document.querySelector('.gallery');

// console.log(imageGalaryEl);
// const arrayItems = [];

// const imagesItems = images.forEach(image => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item');
//   // console.log(itemEl);

//   const imageEl = document.createElement('img');
//   imageEl.classList.add('gallery__item-img');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 360;
//   // console.log(imageEl);
//   itemEl.appendChild(imageEl);
//   arrayItems.push(itemEl);
//   // console.log(itemEl);
// });

// imageGalaryEl.append(...arrayItems);
const imageGalaryEl = document.querySelector('.gallery');

const imagesItems = document.querySelector("ul");
const element = images
  .map(function ({ url, alt }) {

    return `<li><img src = '${url}' alt = '${alt}' width="320"></li>`;
  })
  .join("");
imagesItems.insertAdjacentHTML("afterbegin", element);

imagesItems.style.cssText = 
  `display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 32px;
  `;