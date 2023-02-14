// Выполнить все задачи в теге script.Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// const dropdownItems = document.querySelectorAll('.dropdown-item');
// dropdownItems.forEach(function (item) {
//     item.classList.add('super-dropdown');
// });

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary",
// если он присутствует у этого элемента, либо добавить, если такого
// класса у элемента не было.
// const btn = document.querySelector('.btn');
// if (btn.classList.contains('btn-secondary')) {
//     btn.classList.remove('btn-secondary');
// } else {
//     btn.classList.add('btn-secondary');
// }

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
// присутствует класс "menu".
// document.querySelector('.menu').classList.remove('dropdown-menu');


// 4. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// document.getElementById('dropdownMenuButton').id = 'superDropdown';

// 5. Добавьте атрибут data-dd со значением 3 элементу у которого
// существует атрибут "aria-labelledby" равный "dropdownMenuButton"
// используя dataset.
// document.querySelector('[aria-labelledby="dropdownMenuButton"]')
//     .dataset.dd = "3";

// 6. Удалите атрибут type у элемента с классом "dropdown-toggle".
// document.querySelector('.dropdown-toggle').removeAttribute('type');