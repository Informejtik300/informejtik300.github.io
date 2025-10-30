// Sprawdzanie czy urządzenie jest mobilne
function zadzwon() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = "tel:+48123456789";
    } else {
        alert("Niestety funkcja dzwonienia jest dostępna tylko na urządzenia mobilne.");
    }
}

// Zmiana motywu
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

window.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme");
    if (theme === "true") {
        themeToggle.checked = true;
        body.classList.toggle("bodyDark", themeToggle.checked);
        body.setAttribute("data-theme", themeToggle.checked ? "dark" : "light");
    }
});

themeToggle.addEventListener('change', function () {
    localStorage.setItem("theme", themeToggle.checked);
    body.classList.toggle("bodyDark", themeToggle.checked);
    body.setAttribute("data-theme", themeToggle.checked ? "dark" : "light");
});