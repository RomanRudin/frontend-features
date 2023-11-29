let block = document.getElementById("block");
let btn = document.getElementById("btn");
btn.addEventListener("click", changeTheme);

function changeTheme(){
    if (block.getAttribute("theme") == "light"){
        block.setAttribute("theme", "dark");
    }
    else{
        block.setAttribute("theme", "light");
    }
}