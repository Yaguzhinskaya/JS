// Урок 3. Знакомство с функциями в JavaScript
// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
// function kub(num) {
//     let rez = (Math.pow(num));
//     return rez;
// }
// console.log(kub((Math.pow(num))));
// kub(Math.pow(2, 3));
// kub(3, 3); //не получилось
// рабочий 1 вариант
// num1 = 2;
// num2 = 3;
// function kub(num1, num2) {
//     let rez = (num1 * num1 * num1) + (num2 * num2 * num2);
//     return rez;
// }
// console.log(kub(num1, num2));

// рабочий 2 вариант
// function kub(num) {
//     let rez = num * num * num;
//     return rez;
// }
// console.log(kub(2));
// console.log(kub(3));



// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
// let myManey = Number(prompt("От какой суммы хотели бы извлечь 13%?"));
// function zp(maney) {
//     let rez = maney * 0.87;
//     return rez;
// }
// console.log(zp(myManey));



// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let num1 = Number(prompt(`Введите первое число`));
// let num2 = Number(prompt(`Введите второе`));
// let num3 = Number(prompt(`Введите третье`));
// function comparison(num1, num2, num3) {
//     if (num1 > num2) {
//         console.log(`число ${num1} больше`);
//     } else if (num1 === num2) {
//         console.log(` равны`);
//     } else if (num2 > num3) {
//         console.log(`${num2} больше`);
//     } else if (num2 === num3) {
//         console.log(`равны`);
//     } else if (num3 === num1) {
//         console.log(`равны`);
//     } else (num3 > num1)
//     {
//         console.log(`${num2} больше`);
//     }

// }
// comparison(num1, num2, num3);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
// let a = Number(prompt(`Введите первое число`));
// let b = Number(prompt(`Введите первое число`));
// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(a, b));

// const raz = (a, b) => {
//     if (a > b) {
//         return a - b;
//     }
//     else if (b > a) {
//         return b - a;
//     } else console.log(`Числа равны`);

// }
// console.log(raz(a, b));

// const u = (a, b) => {
//     return a * b;
// }
// console.log(u(a, b));

// const del = (a, b) => {
//     return a / b;
// }
// console.log(del(a, b));
