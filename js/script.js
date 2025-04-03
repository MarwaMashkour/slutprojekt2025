const hamburgare = document.querySelector(".hamburgare");
const nav = document.querySelector(".navlankar");

hamburgare.addEventListener('click', toggleMenu);
function toggleMenu() {
    alert("BU");
    nav.classList.toggle("active");
}