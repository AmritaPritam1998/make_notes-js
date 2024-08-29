//Array----a set of numbers.
//index-number---position of numbers in an array.

let array=[1,2,3,4,5];
console.log(array[0]);
console.log(array[3]);

//1.push()---add elements to the end of an array.
let array2=[56,2,3,4,5];
array2.push(99);
console.log(array2);
//2.pop()---Removes the last element.
array2.pop()
console.log(array2);

//3.shift()---Removes the first element.
let firstNumber=array2.shift();
console.log(firstNumber);
console.log(array2);
//4.unshift()---ADD elements to the beginning
array2.unshift(101);
console.log(array2);

//5.concatenation---merging of two arrays

let usa=["john","adam","clarke"];
let india=["amrita","priya","sanjay"];
let usaIndia=usa.concat(india);
console.log(usaIndia);

//6.slice--slice out a piece of array
let fewPeople=usaIndia.slice(1,3);
console.log(fewPeople);

//7.splice---add new items to the array
usaIndia.splice(1,1,"raja");
console.log(usaIndia);

//8.forEach()---it gives individual array element

let hello=usaIndia.forEach(function(individual){
    console.log(individual);
});

console.log(hello);

///9.map()---direct iterate
let hello1=usaIndia.map(function(individual){
    console.log(individual);
});

console.log(hello1);

//10.
const numbers=[1,2,3,4,5];
const resultMap=numbers.map((num)=>num*2);
console.log(resultMap);

const number=[1,2,3,4,5];
const resultForEach=number.forEach((num)=>num*2);
console.log(resultForEach);

//function
//a function is areusable block of code that performs
//a specific task.i js,function canbe declared using the function keyword or as function expressions.
//1.function declaration


//function expression


function add(a,b){
    return a+b;
}
console.log(add(2,3));

//nested functions
function outerFunction(){
    const outerVar="i am outside!";//undefined
    function innerFunction(){
        const innerVar="i am inside!";//"i am outside"
        console.log(outerVar);
    }
    innerFunction();
    console.log(innerVar);
}
outerFunction();

//call back function.

function sayHello(){
    console.log("Hello world");

}
setTimeout(sayHello,4000);