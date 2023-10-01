let username="anustha";
const password="12345";

const user=prompt("Username =");
console.log(user);

let pass=prompt( "Password =");
console.log(pass);

let cpass=prompt( "Confirm Password =");
console.log(cpass);


if((user==username) && (pass==password) && (cpass==pass)){

 alert("You have sucessfully logged in");

}else{
    alert("Username and password is incorrect");
}

