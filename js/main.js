const toggleBtn = document.querySelector('.header__toggle-btn');
const toggleBtnIcon = document.querySelector('.header__toggle-btn i');
const dropDownMenu = document.querySelector('.header__burger');
const overlay = document.querySelector('.overlay');

toggleBtn.onclick = function () {
    overlay.classList.toggle('open');
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

overlay.onclick = function () {
    overlay.classList.remove('open');
    dropDownMenu.classList.remove('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}