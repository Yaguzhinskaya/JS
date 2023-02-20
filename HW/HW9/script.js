// // 1. При изменении значения в input с id="from", значение содержащееся в нем
// //     должно моментально отображаться в span. То есть при печати в input'е тег span
// //     также должен меняться.

// const spanEl = document.querySelector('span');
// document.querySelector('input').addEventListener('input', e => {
//     spanEl.textContent = e.target.value;
// });

// // 2. При клике на кнопку с классом messageBtn необходимо элементу с классом
// // message:
// // 1) добавить два класса: animate__animated и animate__fadeInLeftBig
// // 2) поставить данному элементу стиль visibility в значение 'visible'.

// const message = document.querySelector('.message');
// document.querySelector('button').addEventListener('click', () => {
//     message.style.visibility = 'visible';
//     message.classList.add('animate__animated', 'animate__fadeInLeftBig');
// });

// // 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
// //     форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
// //     должны быть подсвечены незаполненные поля (необходимо поставить класс error
// //     незаполненным полям).
// //     Как только пользователь начинает заполнять какое-либо поле, необходимо,
// //     при вводе в данное поле, произвести проверку:
// //     Если поле пустое, необходимо данное поле подсветить (поставить класс error
// //     данному полю).
// //     Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// const formEl = document.querySelector('form');
// const formControlEls = formEl.querySelectorAll('input, select');
// formEl.addEventListener('submit', event => {
//     formControlEls.forEach(formControlEl => {
//         if (formControlEl.value === '') {
//             formControlEl.classList.add('error');
//             event.preventDefault();
//         }
//     });
// });

// formEl.addEventListener('input', event => {
//     if (!event.target.classList.contains('form-control')) {
//         return;
//     }
//     event.target.value === ''
//     ? event.target.classList.add('error')
//     : event.target.classList.remove('error');
// });