(function() {
  "use strict";

  //  https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/

  const body = document.querySelector("body");
  const checkBox = document.querySelector("#nav-toggle");
  let topPosition;
  const checkIt = function() {
    if (this.checked) {
      topPosition = window.scrollY;
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
      window.scrollTo(0, topPosition);
    }
  }
  checkBox.addEventListener("change", checkIt);

  window.onload = function() {
    const navToggle = document.querySelector('.navigation__checkbox');
    navToggle.checked = false;
  }

}());
