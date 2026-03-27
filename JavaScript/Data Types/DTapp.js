let name = "Priya";
console.log(name); //Priya

//primitives data types
//non-primitive data types

//primitives data types
//string
let name1 = "John";
console.log(name1); //John
//number
let age = 30;
console.log(age);
//boolean
let isStudent = true;
console.log(isStudent);

//UNDEFINED
let address;
console.log(address); //undefined

//NULL //intentionally assigned value to variable
let city = null;
console.log(city); //null

//bigint
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue); 
//1234567890123456789012345678901234567890n
console.log(typeof bigIntValue); //bigint

//symbol //unique and immutable data type
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2); //false

//non-primitive data types

//object //values are stored in key-value pairs
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
};      
console.log(person); // { name: "Alice", age: 25, isStudent: false }
//value of object can be accessed using dot notation or bracket notation
console.log(person.name); //Alice
console.log(person["age"]); //25

//array //ordered collection of values
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); //[1, 2, 3, 4, 5]

// let fruits = [1, apple,true, null, undefined];
// console.log(fruits); //[1, "apple", true, null, undefined]

let arr1 = [1, "Hello", "world",56];
console.log(arr1); //[1, "Hello", "world", 56]

//array opretions
//push() - adds an element to the end of the array

let arrnew = [1, 2, 3];
arrnew.push(4); 

console.log(arrnew); //[1, 2, 3, 4]

//pop() - removes the last element from the array
arrnew.pop();   
console.log(arrnew); //[1, 2, 3]

//shift() - removes the first element from the array
arrnew.shift();  
console.log(arrnew); //[2, 3]
//unshift() - adds an element to the beginning of the array
arrnew.unshift(5);
console.log(arrnew); //[5, 2, 3]

//for loop on array
for (let i = 0; i < arrnew.length; i++) {
    console.log(arrnew[i]);
}

//for each loop on array //forEach() method executes a provided function once for each array element
arrnew.forEach(function(element) {
    console.log(element);
});

//map() method creates a new array populated with the results of calling a provided function on every element in the calling array
let squaredArr = arrnew.map(function(element) {
    return element + element;
});
console.log(squaredArr); //[25, 4, 9]

//filter() method creates a new array with all elements that pass the test implemented by the provided function
let evenArr = arrnew.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenArr); //[4]

//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
let sum = arrnew.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); //10

//funtion //reusable block of code that performs a specific task
function greet() {
    console.log("Hello, World!");
}
greet(); //Hello, World!

//function with parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");     //Hello, Alice!

//function with return value
function add(a, b) {
    return a + b;
}
let result = add(5, 10);
console.log(result); //15

//function expression //a function can also be defined as an expression and stored in a variable
let greet2 = function(name) {
    console.log("Hi, " + name + "!"); //string concatenation
};
greet2("Bob"); //Hi, Bob!

//template literals //allows embedded expressions and multi-line strings
let name3 = "Charlie";
let greeting = `Hello, ${name3}!`;
let greeting2 = `Hi, ${name3} `;
console.log(greeting); //Hello, Charlie!
console.log(greeting2); //Hi, Charlie!
