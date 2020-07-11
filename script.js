// Hamburger menu
const burger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector(".nav_aside");

burger.addEventListener("click", function () {
    column.classList.add("show")
})

iconX.addEventListener("click", function () {
    column.classList.remove("show")
})

// Cookie alert
function WHCheckCookies() {
    if (!localStorage.cookies_accepted) {
        var cookies_message = document.getElementById("cookies-message");
        cookies_message.style.display = "block"
    }
}
window.onload = WHCheckCookies;

function WHCloseCookiesWindow() {
    localStorage.cookies_accepted = true;
    document.getElementById("cookies-message-container").removeChild(document.getElementById("cookies-message"));
}