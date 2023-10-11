/* function getSum(x, y) {
  let sum = x + y;
  console.log(sum);
}

getSum(1, 2);
 */
/* function getProduct(x, y, z) {
  let product = x * y * z;
  return product;
} */

/* let result = getProduct(2, 4, 3);
console.log(result);
 */

//1.Write a function that checks if the provided number is odd or even.

/* function oddOrEven(x) {
  let res;
  if (x % 2 === 0) {
    res = "Even";
  } else {
    res = "Odd";
  }
  return res;
}
let ans = oddOrEven(5);
console.log(ans);
 */

//2.Write a function that takes a number and prints value from 0 to that number (use while loop).
/* function PrintTillN(num) {
  let i = 0;
  while (i <= num) {
    console.log(i);
    i++;
  }
}
PrintTillN(5);
 */

//3.Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers as parameters and perform appropriate operations.
/* let result;
function calculate(actions, x, y) {
  let action=actions.toLowerCase();
  if (action === "add") {
    result = x + y;
  } else if (action === "subtract") {
    result = x - y;
  } else if (action === "multiply") {
    result = x * y;
  } else if (action === "divide") {
    result = x / y;
  } else {
    result = " Invalid Input";
  }
  return result;
}

let ans = calculate("divide", 5, 7);
console.log(ans); */

//4.Write a function that takes day of week as parameter and returns 1,2,3,4,5,6. Example.. Provided sunday should return 1,monday returns 2

/* function dayOfWeek(days) {
  let num;
  let day = days.toLowerCase();
  if (day === "sunday") {
    num = 1;
  } else if (day === "monday") {
    num = 2;
  } else if (day === "tuesday") {
    num = 3;
  } else if (day === "wednesday") {
    num = 4;
  } else if (day === "thursday") {
    num = 5;
  } else if (day === "friday") {
    num = 6;
  } else if (day === "saturday") {
    num = 7;
  } else {
    num = "Invalid Input";
  }

  return num;
}

let ans = dayOfWeek("SunDaY");
console.log(ans);
 */

//5.Write a function that takes 10 numbers and calculates the average of the provided numbers.

/* function getAverage(n = []) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += n[i];
  }

  let result = sum / 10;
  return result;
}

let average = getAverage((n = [1, 4, 5, 7, 213, 45, 7, 3, 31, 56]));
console.log(average); */

//6.Write a function that takes a number as a parameter and returns a sum from 0 to that number.
/* let sum = 0;
const getSum = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const ans = getSum(10);
console.log(ans); */

//7.WAF that converts dollars into cents.

/*const dollarToCents = (dollar) => {
  let cents = dollar * 100;

  return cents;
};
const cents = dollarToCents(15);
console.log(cents);
*/

//8.WAF that converts temperature in Celsius into Fahrenheit.

/* const celsiusToFahrenheit = (celsius) => {
  let fahrenheit = celsius * (9 / 5) + 32;

  return fahrenheit;
};
console.log(celsiusToFahrenheit(15)); */

//9.WAF that calculates the factorial of a number

/* function getFactorial(x) {
  let fact = 1;
  for (let i = 1; i <= x; i++) {
    fact *= i;
  }
  return fact;
}

let factorial = getFactorial(5);
console.log(factorial);
 */

//10.WAF that calculates the given number is prime or not.

/* function primeOrNot(x) {
  let fact = 0;
  let ans;
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      fact++;
    }
  }
  if (fact === 2) {
    ans = "Prime";
  } else {
    ans = "Not Prime";
  }
  return ans;
}
let result = primeOrNot(1331);
console.log(result);


const getProduct = (x, y) => {
  let product = x * y;
  console.log(product);
};

getProduct(10, 15);
 
*/
