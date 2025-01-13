const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');

    if (html.classList.contains('dark')){
        localStorage.setItem('darkMode', 'enabled');
    }
    else {
        localStorage.setItem('darkMode', 'disabled')
    }
}

function darkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.documentElement.classList.add('dark');
    }
}

document.addEventListener('DOMContentLoaded', darkModePreference);

document.getElementById('dark-toggle').addEventListener('click', toggleDarkMode);