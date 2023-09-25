console.log("hello from index.js");
//ES5
var person="anu";
person="anustha";
console.log(person);

//ES6

let a =123;
console.log(a);

const b ="2003/01/03"
console.log(b);

const d= new Date();
console.log(d);

let da= new Date();
console.log(da);

const isValid = true;
console.log(isValid);

alert("anustha");

let personName=prompt("what is your name?");
console.log(personName);

const isAbove18=confirm("Are you above 18?");
console.log(isAbove18);

const isOfAge =isAbove18? "above":"below";
const text=
"My name is "+ personName + 
" and I am " + isOfAge + " 18 years";

alert(text);

// Write a js code that asks for username and password with confirm password,
//if the username and password matches, alert "You have sucessfully logged in"
//else alert "Username and password is incorrect"