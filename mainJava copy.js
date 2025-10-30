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

// Funkcja inicjalizująca Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'pl',
            includedLanguages: 'pl,en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );
}

// Funkcja do wywołania tłumaczenia
function translateTo(lang) {
    var googleSelect = document.querySelector("select.goog-te-combo");
    if (!googleSelect) {
        // jeśli select Google Translate nie jest gotowy, spróbuj ponownie
        setTimeout(function() {
            translateTo(lang);
        }, 200);
        return;
    }
    googleSelect.value = lang;
    googleSelect.dispatchEvent(new Event("change"));
}

// Ładowanie widgetu Google Translate
window.addEventListener('load', function () {
    var script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
});

// Zmiana języka przez select użytkownika
const languageSelect = document.getElementById('language');
languageSelect.addEventListener('change', function () {
    translateTo(this.value);
});