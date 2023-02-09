// Урок 3. Знакомство с функциями в JavaScript
// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function kub(num) {
    let rez = (Math.pow(num));
    return rez;
}
console.log(kub((Math.pow(num))));

// kub(Math.pow(2, 3));
// kub(3, 3); //не получилось
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

// function comparison(num1, num2, num3) {
//     if (num1 > num2) {
//         console.log(comparison(inp1(`число ${num1} больше`)));
//     } else if (num1 === num2) {
//         console.log(comparison(inp1(` равны`)));
//     } else if (num2 > num3) {
//         console.log(comparison(inp2(`${num2} больше`)));
//     } else if (num2 === num3) {
//         console.log(comparison(inp2(`равны`)));
//     } else if (num3 === num1) {
//         console.log(comparison(inp3(`равны`)));
//     } else (num3 > num1)
//     {
//         console.log(comparison(inp3(`${num2} больше`)));
//     }

// }
// let inp1 = Number(prompt(`Введите первое число`));
// let inp2 = Number(prompt(`Введите второе`));
// let inp3 = Number(prompt(`Введите третье`));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
// let inp1 = Number(prompt(`Введите первое число`));
// let inp2 = Number(prompt(`Введите первое число`));
// const sum = (a, b) => {
//     return a + b;
// }
// obraz1 = sum;
// console.log(sum(obraz1));

// const raz = (a, b) => {
//     return a - b;
// }
// obraz4 = raz;
// console.log(raz(obraz4));

// const u = (a, b) => {
//     return a * b;
// }
// obraz2 = u;
// console.log(u(obraz2));

// const del = (a, b) => {
//     return a / b;
// }
// obraz3 = del;
// console.log(del(obraz3));

// obraz1(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`)));
// obraz2(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`)));
// obraz3(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`)));
// obraz4(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`)));