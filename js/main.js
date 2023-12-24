
//note: this function is responsible for toggling the visibility of the menu.
//when user clicks on a toggle button it adds or removes the 'active' class from
//the menu element to control ots display status.

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick  = ()=>{
    menu.classList.toggle('ri-close-fill');
    navbar.classList.toggle('active');
}

window.onscroll  = ()=>{
    menu.classList.remove('ri-close-fill');
    navbar.classList.remove('active');
}