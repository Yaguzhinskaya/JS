
// const weekDay = { // const-ссылка weekDay-объект
//     'fff': 'Понедельник', //     'fff'-ключ
//     2: 'Вторнник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
// console.log(weekDay.fff);

// const user = {
//     firstName: 'Kostya',
//     surname: 'Filipenko',
//     age: 40,

// функция в рамках объекта
//     showAll: function () {
//         let str = '';
//         for (const key in user) {
//             if (key != 'showAll') str += '-' + user[key];
//         }
//         console.log(str);
//     }

// }
// user.showAll();
// let newProp = prompt('Название свойства');
// user[newProp] = prompt('Введите значание свойства');
// user.showAll();
// delete user.surname;
// user.showAll();


// Даны два массива: первый с названиями дней недели, а
// второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.
// 2 const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый
// элемент этого объекта в квадрат.
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const weekDay = {};
// for (let i = 0; i < arr1.length; i++) {
//     weekDay[arr1] = arr2[i];
// }
// console.log(weekDay);

// const obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = 0;
// for (const key in obj) {
//     for (const subkey in obj[key]) {
//         sum +=obj[key][subkey];
//     }
// }
// console.log(sum);


// Создайте объект riddles
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// Добавьте свойство hints (содержащее 2 подсказки)
// Если пользователь ответил неверно, ему даётся одна подсказка
// Если пользователь ответил второй раз неверно, даётся вторая подсказка
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”

// const riddles = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'Ель',
//     count: 0,
//     hints: {
//         hint1: 'Хвойная',
//         hint2: 'Есть иголки'
//     },
//     askQuestion: function () {
//         if (prompt(this.question) == this.answer) {
//             alert('Молодец!');
//             this.count = 0;
//         } else {
//             if (this.count == 0) {
//                 alert('Неверный ответ, первая подсказка: ' + this.hints.hint1);
//                 this.count++;
//             } else if (this.count == 1) {
//                 alert('Неверный ответ, вторая подсказка: ' + this.hints.hint2);
//                 this.count++;
//             } else if (this.count == 2) {
//                 alert('Вы проиграли, правильный ответ ' + this.answer);
//                 this.count = 0;
//             }
//         }

//     }

// };
// do {
//     riddles.askQuestion();
// } while (riddles.count != 0);