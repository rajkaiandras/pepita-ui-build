/* DOM References */
const hamburgerMenu = document.querySelector('.main-header__hamburger-menu');
const navigationMenu = document.querySelector('.main-navigation');
const navigationLinks = document.querySelectorAll('.main-navigation__link a');
const backdrop = document.querySelector('.backdrop');
const mainContent = document.querySelector('.page-content-inner');

/* Function Declarations */
const openNavigationMenu = () => {
  navigationMenu.classList.add('open');
  backdrop.classList.add('open');
  mainContent.classList.add('shifted');
};

const closeNavigationMenu = () => {
  navigationMenu.classList.remove('open');
  backdrop.classList.remove('open');
  mainContent.classList.remove('shifted');
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
