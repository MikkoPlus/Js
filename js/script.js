//let userName = prompt ('Введите ваше имя');
//console.log('Здравствуй,' + userName + '!');

// let a = 3;
// let b = 2;
// let userAge = 23;
// let isStudent = true;

// console.log(a + b); //5
// console.log(a - b); //1 
// console.log(a / b); //1.5
// console.log(a * b); //6

// let a = prompt('Введите нынешний год');
// let b = prompt('Введите дату вашего рождения');
// let resalt = a - b;
// console.log('Вам:'+ resalt);

// let a = prompt('Введите число а'); //принимаем число а
// let b = prompt('Введите число b');//принимаем число б
/*
if(a > b){
console.log('максимальное число a')
}  
else {
    if (a == b)
    console.log('числа a и b равны');

    else {
    console.log('максимальное число b');
    }
} 
*/
/*
if (a > b){//если число а больше
    console.log('число а больше');
}
else if(a == b){//если числа равны
    console.log('числа равны');
}
else{//во всех остальных случаях
    console.log('число б больше');
}
*/
// if (a > b){
//     console.log('максимальное число а');
//     console.log('...=)')
/*
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 == 2);
console.log(1 < 2);
console.log(1 <= 2);
console.log(1 != 2);
оператор % - деление без остатка
*/
/*
let a = prompt('введите число');
let result = a % 2;

if (result == 0){
    console.log('число чётное');
} else {
    console.log('число не чётное');
}
*/
/*
let a = prompt('введите число');
if (a % 2 == 0){
    console.log('число чётное');
} else {
    console.log('число не чётное');
}
*/
/*
let target = Math.round(Math.random() * 10);
while (true){
let variant = prompt('Угадай число');

if (variant < target){
    console.log('Число ' + variant + '  меньше чем загаданное');
} else if (variant > target)
{
    console.log('Число ' + variant + ' больше чем загаданное');
} else{
    break;
}
}
console.log('Вы угадали число ' + target );
*/

//Рандомные числа

/*
let target = Math.round(Math.random() * 10);
let variant;
do{
variant = prompt('Угадай число');

if (variant < target){
    console.log('Число ' + variant + '  меньше чем загаданное');
} else if (variant > target)
{
    console.log('Число ' + variant + ' больше чем загаданное');
} 

//Циклы

}while (variant != target);
console.log('Вы угадали число ' + target );
*/
/*
let value = prompt('Введите число');
let result = 1;
let n = 2;

while(n <= value){
    result = result * n;
    n = n + 1;
}

console.log('Результат ' + result) 
*/
/*
let value = prompt('Введите число');
let result = 1;

for(let n = 1; n <= value ; n = n + 1){
    result = result * n;
}
console.log('Результат '  + result)
*/
/*
let isBlack = true;
for(y = 0; y < 3 ; y = y + 1){
    console.log('Начало рисования строки');
    for(x = 0; x < 3; x = x + 1){
        let color = ' white';
        if(isBlack){
            color = ' black';
            isBlack = false
        }
        else {
            isBlack = ' white';
        }
        console.log('y = ' + y + ', x = '  + x + ' color =' + color)
    }

}*/

// ФУНКЦИИ 

/*
let value1 = prompt('Введите первое число');
let value2 = prompt('Введите второе число');

let result1 = 1;
let result2 = 1;

for(let n = 1; n <= value1 ; n = n + 1){
    result1 = result1 * n;
}

for(let n = 1; n <= value2 ; n = n + 1){
    result2 = result2 * n;
}

let finalResult = result1 + result2;
console.log('Результат слодения факториалов = '  + finalResult);
*/

/*
function factorial (value){
    let result= 1;
    for(let n = 1; n <= value ; n = n + 1){
        result = result * n;
    }
    return result
}

let value1 = prompt('Введите первое число');
let value2 = prompt('Введите второе число');

let finalResult = factorial(value1) + factorial(value2);
console.log('Результат сложения факториалов = '  + finalResult);
*/
/*
function factorial(value){
    if (value <= 1){
        return 1;
    }
    return value * factorial(value - 1)
}
let value = prompt('Введите число');

console.log('Результат = ' + factorial(value)); 
*/

//ФУНКЦИЯ РАНДОМНЫХ ЧИСЕЛ

// function generateRandomNumber(to) {
//     return Math.round(Math.random() * to)
// }
// console.log(generateRandomNumber(10000));


function generateRandomNumber(to) {
    return Math.floor(Math.random() * to)
}
let value = prompt('колличество попыток');
for(y = 1; y <= value ; y = y + 1)
    console.log(y + generateRandomNumber(101));

