(function() {
  "use strict";

  //  https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/

  const body = document.querySelector("body");
  const checkBox = document.querySelector("#nav-toggle");
  const checkIt = function() {
    if (this.checked) {
      body.classList.add("modal-open");
      body.style.top = `-${window.scrollY}px`;
    } else {
      body.classList.remove("modal-open");
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
  checkBox.addEventListener("change", checkIt);

  // window.onunload = function() {
  //   const navToggle = document.querySelector('.navigation__checkbox');
  //   navToggle.checked = false;
  // }


}());
