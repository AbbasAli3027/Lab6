let myNumber = 10;

let myString = "Hello,Javacript!";

console.log(myNumber, myString);

let array = [];
for (let i = 0; i <= 10; i++) {
  array.push(i);
}
console.log(`Task 1: ${array}`);

let multipleArray = [];
for (let i = 1; i <= 5; i++) {
  multipleArray.push(3 * i);
}

console.log(`Task 2: ${multipleArray}`);

function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log("Task 3:", addNumbers(5, 5));

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

console.log("Task 4:", multiplyNumbers(5, 5));
