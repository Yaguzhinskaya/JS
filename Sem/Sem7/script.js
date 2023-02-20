// Можно получить список всех таблиц стилей, прикреплённых к документу через - Document.stylesheets,который возвращает массив объектов CSSStyleSheet.

//HTMLElement.style - добавить встроенные стили прямо на элементы, которые мы хотим динамически стилизовать

//Node — это базовый класс для всех DOM-интерфейсов (Document)
//У Node тоже есть родитель — EventTarget

// ???? (не)живые статические элементы

// Spread operator (англ. «расширять») — оператор расширения, или, по-другому, распространения данных из массива в атомарные элементы

// const studentsGroup1PracticeTime = [
//     {
//         firstName: "Ivanov",
//         practiceTime: 56
//     },
//     {
//         firstName: "Petrov",
//         practiceTime: 120
//     },
//     {
//         firstName: "Sidorov",
//         practiceTime: 148
//     },
//     {
//         firstName: "Belkin",
//         practiceTime: 20
//     },
//     {
//         firstName: "Avdeev",
//         practiceTime: 160
//     }
// ];
// const studentsGroup2PracticeTime = [
//     {
//         firstName: "Mankov",
//         practiceTime: 87
//     },
//     {
//         firstName: "Kistin",
//         practiceTime: 133
//     },
//     {
//         firstName: "Kotlyarov",
//         practiceTime: 140
//     },
//     {
//         firstName: "Peskov",
//         practiceTime: 10
//     },
// ];
// // Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов и находить максимум среди них.Функция должна вызываться подобным образом: const maximum = findMax(4, 7, 10);
// function findMax() {
//     const values = arguments; // arguments — переменная, которая доступна внутри каждой
//     // функции и содержит в себе все аргументы, переданные в функцию.Является псевдомассивом.
//     let maxValue = -Infinity;
//     // Поскольку arguments является псевдомассивом, мы не можем применять к нему новые методы массивов, такие как forEach или reduce, а будем итерировать по старинке.
//     for (let index = 0; index < values.length; index++) {
//         if (values[index] > maxValue) maxValue = values[index];
//     }
//     return maxValue;
// };
// // Мы должны передавать в функции только числа, а в наших массивах содержатся объекты, поэтому сначала создадим массивы только со значениями времени, отработанного студентами.
// const group1PracticeTime = studentsGroup1PracticeTime.map((student) =>
//     student.practiceTime);
// const group2PracticeTime = studentsGroup2PracticeTime.map((student) =>
//     student.practiceTime);
// // Теперь можем вызывать функцию поиска максимального значения. Она принимает множество числовых аргументов, а у нас есть только массив — тут нам и поможет оператор spread.
// const maxTimeFromGroup1 = findMax(...group1PracticeTime); // ...group1PracticeTime вытянет из массива все элементы и передаст их в функцию как отдельные переменные.
// // Это аналогично страшной и неудобной записи:
// findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2],
//     group1PracticeTime[3], group1PracticeTime[4])
// console.log(maxTimeFromGroup1); // 160
// const maxTimeFromGroup2 = findMax(...group2PracticeTime);
// console.log(maxTimeFromGroup2); // 140

// const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
// // Для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов первого и второго массива. Также мы могли бы добавить в него и другие элементы.
// const maxTimeBothGroups = findMax(...bothGroupsTime);
// console.log(maxTimeBothGroups); // 160


// Rest - operator - о этот оператор позволяет не перечислять все аргументы функции как отдельные переменные, а получить их все одним массивом





















// Задание 1 (тайминг 25 минут)
// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

