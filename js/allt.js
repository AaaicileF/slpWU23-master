
document.querySelector(".fade-layer").addEventListener("click",showMenu);

document.querySelector(".menu-button").addEventListener("click",showMenu); 

document.querySelector("button").addEventListener("click", showMessage); 

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");   
}

function showMessage(){
    let message = document.querySelector("main.button");
    message.classList.toggle("visible");

    // let layer = document.querySelector(".fade-layer");
    // layer.classList.toggle("visible");   
}



