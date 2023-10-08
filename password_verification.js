document.querySelector('.button').onclick=function(){
let username="anustha";
const password="12345";

let pass=document.querySelector('.pass').value;
let cpass=document.querySelector('.cpass').value;

if((user==username) && (pass==password) && (cpass==pass)){

 alert("You have sucessfully logged in");

}else{
    alert("Username and password is incorrect");
}

}