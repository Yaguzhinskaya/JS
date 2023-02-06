// function getMaximum(Numbers) {

// }

// alert("Привет, скрипт!");

// function hiName(name) {
//     console.log(name);
// }
// hiName('Lisa');
// let count = 5;
// function counter() {
//     return count++;
// }
// counter();
// counter();
// console.log(count);


// НЕ ПОЛУЧИЛОСЬ
// let age = Number(prompt('Сколько Вам лет?'));
// function upAge() {
//     return age + 5;
// }
// upAge();
// console.log('Через 5 лет вам будет ${age}');


//НЕ ВЫВОДИТСЯ СТРЕЛОЧНАЯ ФУНКЦИЯ АВТОЗАПОЛНЕНИЕМ NFN
// const tyLUpAge = () => age + 5;
// console.log('Через 5 лет вам будет ${tyLUpAge()}');

// function hi() {
//     console.log('hiiiiiiii')
// }
// hi();
// const sum = (pra1, pra2) => {
//     return pra1 + pra2
// }
// console.log(sum(2, 5));

// const salary = (maney) => {
//     maney = maney * 0.87;
//     return maney * 0.75;
// }

// const userManey = Number(prompt('сколько ты зарабатываешь?'));
// console.log(salary(userManey));


// const salary = (maney) => {
//     maney = maney * 0.87;
//     return maney * 0.75;
// }
// const userManey = Number(prompt('сколько ты зарабатываешь?'));
// let maneyMonth = salary(userManey);
// console.log(`Для расходов можно использовать: ${salary(userManey)}`);
// console.log('Теперь на еду желательно потратить не больше, чем ${maneyMonth*0.3}');


// say();
// function say() {
//     alert('привет');
// }






// Текст задания
// 1 Написать функцию, которой передаем, имя,
// фамилия и возраст, и получаем строку "Привет
// Иван Петров с возрастом 17" (только здесь
// данные, которые были переданы в функцию)

// function hello(myName, lastName, age) {
//     console.log(`Привет, ${myName} ${lastName} с возрастом ${age}`);
// }
// const hello = (myName, lastName, age) => {
//     console.log(`Привет, ${myName} ${lastName} с возрастом ${age}`);
// }
// hello("Юлия", "Полякова", 30)

// 2 Создайте функцию которая возводит переданное
// число в квадрат
// function qvad(num) {
//     let res = num * num;
//     return res;
// }
// console.log(qvad(5));


// 3 Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
// function isPositive(num) {
//     if (num > 0) {
//         console.log('+++')
//     } else if (num < 0) {
//         console.log('---')
//     }
//     else {
//         console.log('num = 0')
//     }
// }
// isPositive(6);
// isPositive(-3);
// isPositive(0);


// 1 Сделайте функцию, которая параметрами принимает 3
// числа и выводит в консоль сумму этих чисел.
// function getSum(num1, num2, num3) {
//     let sum = num1 + num2 + num3;
//     return sum;
// }
// console.log(getSum(1, 2, 3));

// 2 С помощью созданной вами функции выведите в консоль
// сумму значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// 3 Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов
// функции.
// func(2); //4
// func(3); //9
// func(); //25


// 1 Сделайте функцию, которая параметром принимает число,
// а возвращает квадратный корень из этого числа. С
// помощью этой функции найдите корень числа 3, затем
// найдите корень числа 4 Просуммируйте полученные
// результаты и выведите их в консоль.

// function getRoot(num) {
//     return Math.sqrt(num);
// }
// console.log(getRoot(9) + getRoot(4));


// 2 Создайте функцию, которая находит минимальное число из
// 2х передаваемых аргументов функции