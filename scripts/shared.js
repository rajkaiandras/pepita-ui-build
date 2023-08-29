/* DOM References */
const hamburgerMenu = document.querySelector('.main-header__hamburger-menu');
const navigationMenu = document.querySelector('.main-navigation');
const navigationLinks = document.querySelectorAll('.main-navigation__link a');
const backdrop = document.querySelector('.backdrop');

/* Functions */
const openNavigationMenu = () => {
  navigationMenu.classList.add('open');
  backdrop.classList.add('open');
};
const closeNavigationMenu = () => {
  navigationMenu.classList.remove('open');
  backdrop.classList.remove('open');
};

/* Event Listeners */
hamburgerMenu.addEventListener('click', () => {
  openNavigationMenu();
});

backdrop.addEventListener('click', () => {
  closeNavigationMenu();
});

for (var i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', () => {
    closeNavigationMenu();
  });
}
