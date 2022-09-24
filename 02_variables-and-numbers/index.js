// задача 1 вычислить площадь прямоугольника

let x1 = 5;
let y1 = 8;

let x2 = 5;
let y2 = 5;

// s = площадь прямоугольника

let s = Math.abs(y2 - y1) * Math.abs(x2 - x1);

console.log(s)

// задача №2

let a = 13.123456789;
let b = 2.123;

let n1 = 5;

let myA = Math.round(a * Math.pow(10, n1));

console.log(myA)

let myB = Math.round(b * Math.pow(10, n1));

console.log(myB)
console.log(myA === myB)
console.log(myA >= myB)
console.log(myA <= myB)
console.log(myA > myB)
console.log(myA < myB)
console.log(myA != myB)




// задание №3

let n = 0;
let m = 100;


let range = Math.abs(Math.max(n,m) - Math.min(n,m));

let min = Math.min(n,m);

let firstRandomNumber = (Math.round(Math.random() * (range-2))) + min;


// случайное нечетное число

let oddRandom = Math.abs(firstRandomNumber + (firstRandomNumber % 2) + 1);

console.log(oddRandom);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.filter(number => number < 6);
console.log(newArr)
console.log(arr)