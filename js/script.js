"use strict"

// Меню бургер========================================================================================================

const iconMenu = document.querySelector('.main-header__burger');
const menuBody = document.querySelector('.main-nav');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   });
}


// Прокрутка при клике===============================================================================================

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

         if (iconMenu.classList.contains('active')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}
