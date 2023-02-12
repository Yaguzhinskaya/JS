// Задание 1

// Упражнение 1

// const daysOfWeek = {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресенье",
// }
// console.log(daysOfWeek[3])

// Упражнение 2.3.4

// const user = {
//     firstname : "Dasha",
//     surname : "Pestova",
//     age : 30,

//     showAll : function () {
//         let str =""
//         for (const key in user) {
//             if(key != "showAll") str += "-"+user[key]     
//         }
//         console.log(str)
//     }                                                                                
// }
// user.showAll()
// let lastname = prompt("Введите ключ")
// user[lastname] = prompt("Введите значение")
// user.showAll()

// delete user.lastname
// user.showAll()

// Задание 2

// Упражнение 1

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const daysOfWeek = {};

// for (let index = 0; index < arr1.length + 1; index++) {
//     daysOfWeek[arr2[index]] = arr1[index]
// }
// console.log(daysOfWeek)

// Упражнение 2

// const obj = {x: 1, y: 2, z: 3};

// for (const key in obj) {
//     obj[key] *= obj[key]
// }
// console.log(obj)

// Задание 3

// const obj = {
// 	key1: {
// 		key1: 1, key2: 2, key3: 3
// 	},
// 	key2: { key1: 4, key2: 5, key3: 6
// 	},
// 	key3: { key1: 7, key2: 8, key3: 9
// 	},
// }

// let sumNumber = 0

// for (const key in obj){
//     for (const item in obj[key]) {
//         sumNumber += obj[key][item]
//     }
// }
// console.log(sumNumber)

// Задание 4

const riddles = {
    question : "Зимой и летом одним цветом",
    answer : "Елка",
    counter : 0,
    hints : {
        hint1 : "Хвойная",
        hint2 : "Зелёная"
    },
    askQuestion : function(){
        if (prompt(this.question) == this.answer) {
            alert("Правильный ответ")
            this.counter = 0
        }
        else{
            if (this.counter == 0){
                alert(`Подсказка 1 ` + this.hints.hint1);
                this.counter++;
            } else if (this.counter == 1) {
                alert(`Подсказка 2 ` + this.hints.hint2);
                this.counter++;
            } else if (this.counter == 2) {
                alert(`Вы проиграли`);
                this.counter = 0;
            }
        }

    }
}

do {
    riddles.askQuestion();
} while (riddles.count != 0)