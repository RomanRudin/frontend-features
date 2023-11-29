let form = document.getElementById("form");
let btnEnter = document.getElementById("btnEnter");
let btnClose = document.getElementById("btnClose");
let btnLogin = document.getElementById("btnLogin");

let emailValue = document.getElementById("emailValue");

btnEnter.addEventListener('click', openForm);
btnClose.addEventListener('click', closeForm);
btnLogin.addEventListener('click', loginForm);

function openForm(){
    form.style.top = "50%";
}
function closeForm(){
    form.style.top = "-50%";
}
function loginForm(){
    alert(emailValue.text);
}