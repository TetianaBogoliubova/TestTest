// function makeFood() {
//     console.log("Нарезать овощи")
//     console.log("Сварить овощи")
//     console.log("Заправить овощи")
//     console.log("Перемешать овощи")
// }
// makeFood()
// makeFood()



// //Создать ф, которая получает имя пользователя и отображает Привет,    имя

// function greeting(name) {
// const newName = name.toUpperCase() //склеивание в одну строку+ большие буквы
// console.log("Привет, " + newName)
// }
// greeting ("Arsen")
// greeting ("Зфмуд")

//создать фю, которая получает два числовых параметра
// сумму
// разность
// произведение
// деление
// function calc(num1, num2) {
//     console.log(num1 + num2);
//     console.log(num1 - num2);
//     console.log(num1 * num2);
//     console.log(num1 / num2);
// }
// calc(100, 20);
// calc(50, 5);

// //ф, которая получает два числа и в консоли выводит наибольшее из них
// function max(num1, num2) {
//     if(num1 > num2) {
//         console.log(num1)
//     }
//     if(num1 < num2) {
//         console.log(num2)
//     }
// } 
// max(100, 20);
// max(90, 50);

//цикл, выводит 1-9. 
//сщздать ф.. к-ая принимает число и выводит все числа от 0 до числа, которое принимает в параметре
//for (let i = 0; i < 10; i++) {
    //console.log(i)
//}
// function num() {
//     for(let i = 0; i < number.length; i++) {
// console.log()
//     }   
// }


// function printN(number) {
//     for(let i = 0; i < number; i++) {
//         console.log(i)
//     } 
// }
// printN(20)


//ф, которая принимает массив, и отображает каждый элемент массива в консоле

// function printMass(array) {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// printMass()
// / Задача. Создать функцию, которая принимает массив и отображает каждый элемент массива 
// // в консоли

// Starta Institute 1 11:47
// Задача. Создать функцию, которая принимает массив и отображает каждый элемент массива 
// в консоли
// function printArrayElements(array) {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// } 

// printArrayElements(["Arsen", "Alexander", "Vladimir"])
// printArrayElements([1, 2, 3, 4, 5, 6, 7])

// function sq(a, b) {
//         console.log(a * b)
// }
// sq(3, 5);



// Задача. Создать функцию, которая будет поздравлять пользователя с днем рождения
// Она должна принимать имя пользователя и в консоли отображать поздравление
// "Привет, ${имя}, Поздравляю с днем рождения!"
// function congrats(name) {
//     console.log(`Привет, ${name}, Поздравляю с днем рождения`)
// }
// congrats("Arsen")

//ф, получает число и отображает четное число, иначе нечетное словами

// function number (num) {
//     if(num % 2 == 0) {
//         console.log("Четное")
// } else {
//     console.log("Нечетное")
// }
// }

// number(5);
// //ф, которая принимает число и выводит массив ч сислами от 0 до этого числа
// //fn 5 ---> [0,1 ,2,3,4//]
// function printArray(number) {
//     const arr = []
//     for(let i = 0; i < number; i++) {
//         arr.push(i)
//     }
//     console.log(arr);
// }
// printArray(10);

// show - показать
// get - получить
// delete - удалить
// change - изменить
// print - распечатать
// add - добавить
// edit - редактировать 
// calc - посчитать
// */
// Задача. Создать функцию, которая принимает число и выводит массив с числами
// от 0 до этого числа. 
// function showArray(number) {
//     const arr = []
//     for(let i = 0; i < number; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
// showArray(10)


//ф, которая запрашивает у чела 3 имени (cukl)
// .каждое введеное имя перевести в верхний регистр
// . сщздать массив , куда положить все имена в верхний регистр
// в консоли отобразить массив
function printName() {
    const names = []
    for(let i = 0; i < 3; i++) {
    const name = prompt("Введите имя")
    const upperCasedName = name.toUpperCase() 
    names.push(upperCasedName)
}
console.log(names)
}
printName()