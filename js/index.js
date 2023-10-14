const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavicon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector('.mobile-nav');

const daeLogo= document.querySelector('.header-nav-logo')

mobileNavButton.addEventListener("click", function () {
  mobileNavicon.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  daeLogo.classList.toggle('none')
})

