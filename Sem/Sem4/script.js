
// let count = 0;
// while (count < 3) {
//     console.log(`hi`);
//     count++;
// }

// for (let i = 0; i <= 2; i++) {
//     console.log(`hi`);
// }
// for (let j = 0; j <= 15; j + 5) {
//     console.log = (j);
// }

// let pass;
// let count = 0;
// do {
//     if (count >= 3) {
//         alert(`Пароль неверный`);
//     }
//     pass = Number(prompt(`Введите пароль`));
//     count++;

// } while (pass !== 123);

// const arr = [];

// const arr = [1, 3, 4];
// console.log(arr);
// console.log(arr[0]); //обратился к 0 и вывел
// console.log(arr.length); // чтобы найти кол-во элем-в массива
// console.log(arr[arr.length - 1]); // последний элемент в массиве




// const user = [];
// user.push(prompt(`Имя`));
// user.push(Number(prompt(`Возраст`)));
// console.log(user);

// const arr = [1, 2, 4, 6, 45];

// for (let i = 0; i < arr.lengt; i++) {
//     const element = arr[i];
//     console.log(element);
// }











// Текст задания
// 1 Создайте массив с элементами 1, 2, 3 Выведите на
// экран каждый из этих элементов.
// const arr = [1, 2, 3];
// console.log(arr);

// 2 Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.
// console.log(arr.length); // чтобы найти кол-во элем-в массива
// let size = Number(prompt(`Введите желаемый размер массива`));
// const arr = [];
// for (let i = 0; i < size; i++) {
//     arr.push(Math.round(Math.random() * 100));
// }
// console.log(arr);

// 3 Создайте массив с элементами 'a', 'b', 'c'.
// Запишите вместо первого элемента число 1,
// вместо второго - 2, вместо третьего - 3
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
}
console.log(arr);