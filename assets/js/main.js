


let toggle_button = document.querySelector("nav .toggle-button");
let header = document.querySelector("header.header-area");

toggle_button.onclick = function () {
   header.classList.toggle('nav-collapse');
};