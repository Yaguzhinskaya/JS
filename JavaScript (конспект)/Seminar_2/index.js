// // Задание 1

// let userName = prompt("Введите ваше имя")
// alert(`Добро пожаловать ${userName}`)

// // Задача 2

// let a = 13;
// let b = 5;
// alert(a % b);

// let a
// alert(a) // undefined

// alert ('abc'*3) //NaN

// alert(1/0) // Infinity
// alert(-1/0) // -Infinity

// alert("2" * "3") // 6

// Задача 3

// let a = "2";
// let b = "3";
// let sumNumber = a + b; // конкатенация
// console.log(sumNumber)

// Задача 4

// let userNumberOne = Number(prompt("Введите первое число"));
// let userNumberTwo = Number(prompt("Введите второе число"));

// let sum = userNumberOne + userNumberTwo; //Сумма
// alert(`Сумма ${userNumberOne}  и ${userNumberTwo} равна ${sum}`);

// let subtract = userNumberOne - userNumberTwo; //Разность
// alert(`Разность ${userNumberOne}  и ${userNumberTwo} равна ${subtract}`);

// let multiply = userNumberOne * userNumberTwo; //Произведение
// alert(`Произведение ${userNumberOne}  и ${userNumberTwo} равна ${multiply}`)

// let division = userNumberOne / userNumberTwo //Частное
// alert(`Произведение ${userNumberOne}  и ${userNumberTwo} равна ${division}`)

// Задача 4
// console.log(String(true));
// console.log('a' + true); 
// console.log(Number(true));
// console.log(true + 1);
// console.log(true + true);
// console.log(true - true);
// console.log( String(true) + Number(true) );

// Задача 5

// let userNumber = Number(prompt("Введите ваше число"));
// if (userNumber > 5) {
//     alert(`${userNumber} больше 5`)
// } else if (userNumber < 5){
//     alert(`${userNumber} меньше 5`)
// } else {
//     alert(`${userNumber} равно 5`)
// }

// let test1 = parseInt(prompt("Введите ваше первое число"));
// let test2 = parseInt(prompt("Введите ваше второе число"));
// let result =  (test1 === test2) ? alert("Ваши числа равны") : alert("Ваши числа не равны");


// let numberOne = parseInt(prompt("Введите ваше первое число"));
// let numberTwo = parseInt(prompt("Введите ваше второе число"));
// let result = (numberOne > numberTwo) ? alert(`${numberOne} больше ${numberTwo}`) : alert(`${numberOne} меньше ${numberTwo}`)

// let userNumber = parseInt(prompt("Введите ваше число"));
// let result = (userNumber > 0 && userNumber < 15) ? alert(`${userNumber} больше 0 и меньше 15`) : alert("Одно из условий не выполняется")

// Домашняя работа
// Задача 1
// let num1 = parseInt(prompt("Введите ваше первое число"));
// let num2 = parseInt(prompt("Введите ваше второе число"));
// let result1 = (num1 === 1 || num1 < 1) ? alert(`${num1} равно 1 или меньше`) : alert("Условие один не выполняется")
// let result2 = (num2 === 3 || num1 > 3) ? alert(`${num2} равно 3 или меньше`) : alert("Условие два не выполняется")

// Задача 2
// let test = false;
// let result = (test === true) ? console.log("+++") : console.log("---")

// Задача 3
// let day = Math.floor(Math.random() * 31) + 1;
// if (day <= 10) {
//     alert(`${day} первая декада`)
// } else if (day > 10 && day < 21) {
//     alert(`${day} вторая декада`)
// } else {
//     alert(`${day} третья декада`)
// }

// Задача 4
// let userNumber = parseInt(prompt("Введите число"));

// let one = userNumber % 10; // единицы
// let two = Math.trunc(( userNumber / 10 ) % 10); // десятки
// let three = parseInt( userNumber / 100 ) ; // сотни

// console.log(`В числе ${userNumber} кол-во единиц ${one}, кол-во десятков ${two}, кол-во сотен ${three}`)