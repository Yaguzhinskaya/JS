// Задание 1

// Задача 1.1
// let firstName = prompt("Ваше имя?");
// let secondName = prompt("Ваша фамилия?");
// let age = Number(prompt("Ваш возраст?"));

// function userNameSecondNameAge() {
//     alert(`Привет ${firstName} ${secondName} с возрастом ${age} лет`)
// }

// userNameSecondNameAge()

// Задача 1.2
// let userNumber = parseInt(prompt("Введите число"));

// function SquareNumber(num) {
//     return Math.pow(num, 2)   
// }

// num = SquareNumber(userNumber);

// alert(`Квадрат числа ${userNumber} равен ${num}`)

// Задача 1.3
// let userNumber = parseInt(prompt("Введите число"));

// function checkNumber(number) {
//     if (number > 0){
//         return alert("+++")
//     }
//     return alert("---")
// }

// checkNumber(userNumber)

// Задание 2

// let firstNumber = parseInt(prompt("Введите число 1"))
// let secondNumber = parseInt(prompt("Введите число 2"))
// let thirdNumber = parseInt(prompt("Введите число 3"))

// function sumNumber(num1, num2, num3) {
//    return num1 + num2 + num3
// }

// sum = sumNumber(firstNumber, secondNumber, thirdNumber)
// console.log(`Сумма равна ${sum}`)

// Задание 3

// Задача 3.1
// let userNumber1 = parseInt(prompt("Введите число"))
// let userNumber2 = parseInt(prompt("Введите число"))

// function squareRoot(num) {
//     if (num < 0){
//         return console.log("Число должно быть положительным")
//     }
//     return Math.sqrt(num) 
// }

// let result = parseFloat(squareRoot(userNumber))
// console.log(`Квадратный корень${userNumber1} равен ${result}`)
// console.log(`Квадратный корень${userNumber2} равен ${result}`)


// Задача 3.2
// let firstNumber = parseInt(prompt("Введите число 1"))
// let secondNumber = parseInt(prompt("Введите число 2"))

// function compareNumber(num1, num2) {
//     if (num1 > num2) {
//         return console.log(`Большее число ${num1}`)
//     }
//     else if (num2 > num1){
//         return console.log(`Большее число ${num2}`)
//     }
//     return console.log(`Числа равны`)
// }

// let result = parseInt(compareNumber(firstNumber, secondNumber))


// Задание 4

// Задача 4.1
// let weekDay = parseInt(prompt("Введите число"))

// function findDayWeek(num) {
//     if ( 0>num || num>7 ){
//         return console.log("Число должно быть в диапозоне [1, 7]")
//     }
//     else if (num === 1) {
//         console.log("Понедельник")
//     }
//     else if (num === 2) {
//         console.log("Вторник")
//     }
//     else if (num === 3) {
//         console.log("Среда")
//     }
//     else if (num === 4) {
//         console.log("Четверг")
//     }
//     else if (num === 5) {
//         console.log("Пятница")
//     }
//     else if (num === 6) {
//         console.log("Суббота")
//     }
//     else if (num === 7) {
//         console.log("Воскресенье")
//     }
// }

// findDayWeek(weekDay)


// Задача 4.2


// function greetingUserWithDayTime(firstName) {
//     let time = new Date()
//     let nowHour = Number(time.getHours())
//     console.log(time)
//     console.log(nowHour)
//     if (nowHour < 7) {
//         console.log(`Доброй ночи ${firstName}`);
//     }
//     else if ( nowHour < 13) {
//         console.log(`Доброе утро ${firstName}`);
//     }
//     else if (nowHour < 18) {
//         console.log(`Добрый день ${firstName}`);
//     }
//     else{
//         console.log(`Добрый вечер ${firstName}`);
//     }
// }

// let userName = prompt("Введите ваше имя");
// greetingUserWithDayTime(userName)

// Задача 5

// Задача 5.1

// let userNumber = parseInt(prompt("Введите число"))

// function compareNumber(num) {
//     if (num > 5) {
//         return console.log(`Число ${num} больше 5`)
//     }
//     else if (num < 5) {
//         return console.log(`Число ${num} меньше 5`)
//     }
//     return console.log(`Число ${num} равно 5`)
// }

// compareNumber(userNumber)

// Задача 5.2

// let test1 = parseInt(prompt("Введите первое число"))
// let test2 = parseInt(prompt("Введите второе число"))

// function compareNumber(num1, num2) {
//     return (num1 === num2) ? console.log(`${num1} равен ${num2}`) : console.log(`${num1} не равен ${num2}`)
// }

// compareNumber(test1, test2)

// Задача 5.3

// let test1 = parseInt(prompt("Введите первое число"))
// let test2 = parseInt(prompt("Введите второе число"))

// function compareNumber(num1, num2) {
//     return (num1 < num2) ? console.log(`${num1} меньше ${num2}`) : console.log(`${num1} больше ${num2}`)   
// }

// compareNumber(test1, test2)

// Задача 5.4

// let test1 = parseInt(prompt("Введите число"))

// function findResult(num) {
//     return (0 < num && num < 15) ? console.log(`${num} больше 0 и меньше 15`) : console.log(`${num} не удовлетворяет условиям`)
// }

// findResult(test1)

// Домашняя работа

// Задача 1.

// let userNumber = parseInt(prompt("Введите число"))

// function cubeNumber(num) {
//     result = Math.pow(num, 3)
//     return console.log(`${num}^3=${result}`)
// }

// cubeNumber(userNumber)

// Задача 2

// function salary() {
//     let userSalary = parseInt(prompt("Введите вашу зарплату"))
//     if (typeof(userSalary) === Number){
//         let result = salary * 0.13 + salary
//         return console.log(`Ваша зарплата после вычета налога равна ${result}`)
//     }
//     return console.log(`Ошибка ${typeof(userSalary)}`)
// }

// salary()

// Задача 3

// let num1 = parseInt(prompt("Введите первое число"))
// let num2 = parseInt(prompt("Введите второе число"))
// let num3 = parseInt(prompt("Введите третье число"))

// function compareNumber(num1, num2, num3) {
//     let max = Math.max(num1, num2, num3)
//     console.log(`Большее число ${max}`)
// }

// compareNumber(num1, num2, num3)

// Задача 4

// let num1 = parseInt(prompt("Введите первое число"))
// let num2 = parseInt(prompt("Введите второе число"))

// function sumTwoNumber(num1, num2) {
//     let sum = num1 + num2
//     return console.log(`Сумма чисел ${num1} и ${num2} равна ${sum}`)
// }

// function subtractionTwoNumber(num1, num2) {
//     let subtraction = (num1 < num2) ? num2 - num1 : num1 - num2
//     return console.log(`Разница чисел ${num1} и ${num2} равна ${subtraction}`)
// }

// function divisionTwoNumber(num1, num2) {
//     let division = num1 / num2
//     return console.log(`Частное чисел ${num1} и ${num2} равна ${division}`)
// }

// function multiplicationTwoNumber(num1, num2) {
//     let multiplication = num1 * num2
//     return console.log(`Умножение чисел ${num1} и ${num2} равна ${multiplication}`)
// }

// sumTwoNumber(num1, num2)
// subtractionTwoNumber(num1, num2)
// divisionTwoNumber(num1, num2)
// multiplicationTwoNumber(num1, num2)
