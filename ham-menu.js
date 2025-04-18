document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu tugmasini tanlash
    const toggleButton = document.querySelector('.header__menu-button');
    const navbarMenu = document.querySelector('.header__nav');

    // Tugmaga click event qo'shish
    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        toggleButton.classList.toggle('active'); // Hamburger ikonasi uchun
    });
});
