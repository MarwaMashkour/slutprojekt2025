const hamburgare = document.querySelector(".hamburgare");
const nav = document.querySelector(".navlankar");

hamburgare.addEventListener('click', toggleMenu);
function toggleMenu() {
   
    nav.classList.toggle("active");
   
}