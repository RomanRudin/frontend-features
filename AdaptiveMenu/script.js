let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

burger.addEventListener("click", activeMenu);

let active = false;
function activeMenu(){
    active = !active;
    if (active){
        menu.classList.add("menu-active");
    }
    else{
        menu.classList.remove("menu-active");
    }
}