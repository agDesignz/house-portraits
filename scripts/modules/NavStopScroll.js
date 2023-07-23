class NavStopScroll {
  constructor () {
    this.menuIcon = document.querySelector('.navigation__checkbox');
    this.body = document.querySelector('.body');
    this.navList = document.querySelector('.navigation__list--modal');
    this.window = window;
    this.topPosition;
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleStopScroll());
    this.navList.addEventListener('click', e => this.resetModal(e));
    this.menuIcon.checked = false;
  }

  toggleStopScroll() {
    if (this.menuIcon.checked) {
      this.topPosition = window.scrollY;
      this.body.classList.remove('modal-open');
    } else {
      this.body.classList.remove("modal-open");
      window.scrollTo(0, this.topPosition);
    }
  }

  resetModal(e) {
    if (e.target.classList.contains('navigation__link--modal')) this.menuIcon.checked = false;
  }

}

export default NavStopScroll;

// (function() {
//   "use strict";

//   //  https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/

//   const body = document.querySelector("body");
//   const checkBox = document.querySelector("#nav-toggle");
//   let topPosition;
//   const checkIt = function() {
//     if (this.checked) {
//       topPosition = window.scrollY;
//       body.classList.add("modal-open");
//     } else {
//       body.classList.remove("modal-open");
//       window.scrollTo(0, topPosition);
//     }
//   }
//   checkBox.addEventListener("change", checkIt);

//   window.onload = function() {
//     const navToggle = document.querySelector('.navigation__checkbox');
//     navToggle.checked = false;
//   }

// }());
