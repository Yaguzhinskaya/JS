// Урок 6. Введение в DOM (Document Object Model)
// Обязательное задание.

// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

// ```


// <script>
// "use strict";
// ``
// []()
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()

// const link = document.querySelectorAll(`#super_link`); //обращение к id через решетку
// console.log(link[0].textContent);

// const link2 = document.querySelectorAll(`.card-link`); //обращение к классу через точку
// console.log(link2[0].textContent);






// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
// const link = document.querySelector(`.card-link`);
// link.textContent = `ссылка`;
// console.log(link.textContent);




// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
// const link3 = document.querySelectorAll(`.card-body`); //Document.getElementsByClassName() в
// console.log(link3.textContent);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
// const link4 = document.querySelector('[data-number="50"]');
// console.log(link4);

// 5. Выведите содержимое тега title в консоль.
// []()
const link5 = document.querySelectorAll(`.title`);
console.log(link5.textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
// const link6 = document.querySelector('.card-title');
// console.log(link6.parentNode);

// 7. Создайте тег`p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// const link7 = document.querySelector('.card');
// const p = document.createElement('p');
// p.innerText = 'Привет';
// console.log(p.textContent);

// 8. Удалите тег h6 на странице.
// const link8 = document.querySelector(`.p`);
// p.textContent.remove;
// console.log(p.textContent);
