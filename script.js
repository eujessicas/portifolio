const btnMenu = document.querySelector('.btn-abrir-menu');
const menuMobile = document.getElementById('menu-mobile');
const btnFechar = document.querySelector('.btn-fechar');
const overlay = document.getElementById('overlay-menu');

// Abrir menu
btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
    overlay.style.display = "block";
});

// Fechar no X
btnFechar.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.style.display = "none";
});

// Fechar clicando fora
overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.style.display = "none";
});
