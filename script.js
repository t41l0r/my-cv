
const themeSwitch = document.querySelector('.theme-switch__checkbox');

themeSwitch.addEventListener('change', function() {
    if (themeSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});
