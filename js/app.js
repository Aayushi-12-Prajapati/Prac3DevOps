const register = document.getElementById("registerForm");

if(register){

register.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Registration Successful!");

window.location="login.html";

});

}

const login=document.getElementById("loginForm");

if(login){

login.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Login Successful!");

window.location="index.html";

});

}