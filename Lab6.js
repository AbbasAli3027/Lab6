// Declaring a variable called myNumber and storing a value of 10
let myNumber = 10;

// Declaring a variable called myString and storing a string value in it
let myString = "Hello,Javascript!";

//Console logging both variables
console.log(myNumber, myString);

//Declaring an empty array called "array"
let array = [];
//For loop which iterates 10 times
for (let i = 0; i <= 10; i++) {
  //Pushing the value of i to the empty array
  array.push(i);
}
//Logging the value of array (im using arrays simply because the output looks cleaner and i have ocd)
console.log(`Task 1: ${array}`);

let multipleArray = [];
//Iterating over the first 5 multiples of 3
for (let i = 1; i <= 5; i++) {
  multipleArray.push(3 * i);
}

console.log(`Task 2: ${multipleArray}`);

//Declaring a function called addNumbers that takes two paramters
function addNumbers(num1, num2) {
  //Returning the sum of the two values
  return num1 + num2;
}

console.log("Task 3:", addNumbers(5, 5));

//Declaring a function called multiplyNumbers that takes two paramters
function multiplyNumbers(num1, num2) {
  //Returning the multiplied value of the two input values
  return num1 * num2;
}

console.log("Task 4:", multiplyNumbers(5, 5));
