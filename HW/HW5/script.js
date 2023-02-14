// // Урок 5. Объекты в JavaScript
// // Задание 1
// // Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// // const numbers = {
// //     keyin1: 1,
// //     keyin2: 2,
// //     keyin3: 3,
// //     keyin4: 4,
// //     keyin5: 5,
// //     keyin6: 6,
// //     keyin7: 7,
// //     //вариант решения 1
// //     // ravnoBol: function () {
// //     //     console.log(this.keyin3, this.keyin4, this.keyin5, this.keyin6, this.keyin7);
// //     // }
// //     //вариант решения 2
// //     // for(const key in numbers) {
// //     //     if (const subkey in numbers[])


// //     // }
// //     //вариант решения 3

// //     ravnoBol: function () {
// //         if (subkey in numbers[keyin]) {
// //             numbers[keyin] >= 3;
// //         }
// //     }

// // }
// // // console.log(numbers());
// // // ravnoBol();
// // numbers.ravnoBol();


// // Задание 2
// // Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

// // const post = {
// //     author: "John", // вывести этот текст
// //     postId: 23,
// //     comments: [
// //         {
// //             userId: 10,
// //             userName: "Alex",
// //             text: "lorem ipsum",
// //             rating: {
// //                 likes: 10,
// //                 dislikes: 2, // вывести это число
// //             },
// //         },
// //         {
// //             userId: 5, // вывести это число
// //             userName: "Jane",
// //             text: "lorem ipsum 2", // вывести этот текст
// //             rating: {
// //                 likes: 3,
// //                 dislikes: 1,
// //             },
// //         },

// //     ],
// // };
// // console.log(post.author);
// // for (const key in post) {
// //     for (const subkey in post[5]) {
// //         console.log(subkey in post[5]);

// //     }

// //     // for (let ki in post.comments)
// //     //     if (ki in post.comments) {
// //     //         console.log(ki);
// //     //     }
// // }

// // for (const key in post) {
// //     for (const key in this.author);
// //     console.log(Object.values(post));
// // }
// // console.log(post.author)
// // console.log(post.comments. rating.dislikes)
// // // delete post.postId;



// // Задание 3
// // Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     }
//     // const u = products.price => {
//     // return products.price * 0.85;
//     // console.log(products.price);
//     // }
//     //     Array.products(price) => {
//     //     console.log(price * 0.85);
//     // };
//     //     let raz = 0;
//     // for (const price in products) {
//     //     for (const subkey in obj[price]) {
//     //         raz = products[price][subkey] * 0.85;
//     //     }
//     // }
// ]
// // console.log(raz);
// // console.log(products.price * 0.85);





// // Задание 4
// // 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// // 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

// // ```
// // const products = [
// //     {
// //         id: 3,
// //         price: 127,
// //         photos: [
// //             "1.jpg",
// //             "2.jpg",
// //         ],
// //     },
// //     {
// //         id: 5,
// //         price: 499,
// //         photos: [],
// //     },
// //     {
// //         id: 10,
// //         price: 26,
// //         photos: [
// //             "3.jpg",
// //         ],
// //     },
// //     {
// //         id: 8,
// //         price: 78,
// //     },
// // ];



// // **Задание 5**
// // Дано 2 массива
// // const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// // const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// // ```
// // const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// // const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// // const weekDay = {};
// // for (let i = 0; i < ru.length; i++) {
// //     weekDay[ru] = en[i];
// // }
// // console.log(weekDay);




// // Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
// // слово