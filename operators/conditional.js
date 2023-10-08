/*
const number = 7;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

let a = 123,
  b = 1000;
if (a > b) {
  console.log(a, " is largest.");
} else {
  console.log(b, " is larger");
}
*/

/*
Q4
let n1 = 123,
  n2 = 10;
const  n3=20;
if ((n1 > n2) &&  (n1 > n3) ){
  console.log(n1, " is largest.");
} else if ((n2 > n1) &&  (n2 > n3) )
{
  console.log(n2, " is largest.");
} else {
  console.log(n3, " is largest.");
}

Q5
let choice = "subtract",
  result;
const var1 = 20,
  var2 = 5;

if (choice === "add") {
  result = var1 + var2;
  console.log(result);
} else if (choice === "subtract") {
  result = var1 - var2;
  console.log(result);
} else if (choice === "divide") {
  result = var1 / var2;
  console.log(result);
} else if (choice === "multiply") {
  result = var1 * var2;
  console.log(result);
} else if (choice === "power") {
  result = var1 ^ var2;
  console.log(result);
}
*/
//Q6
const marks = 78;
let grade;

if (marks >= 90) {
  grade = "A+";
} else if (marks >= 80) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else {
  grade = "F";
}
console.log("Grade =", grade);

let ch = "divide",
  answer;
let num1 = 50,
  num2 = 5;
switch (ch) {
  case "add":
    answer = num1 + num2;
    console.log(answer);
    break;

  case "subtract":
    answer = num1 - num2;
    console.log(answer);
    break;

  case "divide":
    answer = num1 / num2;
    console.log(answer);
    break;

  case "multiply":
    answer = num1 * num2;
    console.log(answer);
    break;

  case "power":
    answer = num1 ^ num2;
    console.log(answer);
    break;

  default:
    console.log("Invalid Choice");
}
