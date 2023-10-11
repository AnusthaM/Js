for (let i = 0; i <= 5; i++) {
  console.log("Hello Mom", i);
}
//Q1

for (let x = 1; x <= 10; x++) {
  console.log(`${x}`);
}

//Q2

for (let i = 12; i <= 24; i++) {
  console.log(`${i}`);
}

//Q3
let num = 5;
for (let i = 1; i <= num; i++) {
  console.log(`${i}`);
}
let i = 1;
while (i <= num) {
  console.log(`${i}`);
  i++;
}

//Q4;

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even.`);
  } else {
    console.log(`${i} is odd.`);
  }
}

//q5
let n = 1232,
  ans = 0;
while (n > 0) {
  let x = n % 10;
  ans += x;
  n = Math.floor(n / 10);
}
console.log(ans);

//q6

for (i = 100; i >= 50; i--) {
  console.log(i);
}

//q7

let a = 5,
  res;
for (i = 1; i <= a; i++) {
  res = i * i;
  console.log(`Square of ${i} = ${res}.`);
}
