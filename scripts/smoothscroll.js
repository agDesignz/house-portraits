(function(){
"use strict";

const scrollLinks = document.querySelectorAll('.side-nav__link');

scrollLinks.forEach((eachScrollLink) => {
  eachScrollLink.addEventListener('click', smoothScroll);
});

function smoothScroll(event){
  event.preventDefault();
  const targetID = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetID);
  const originalTop = Math.floor(targetSection.getBoundingClientRect().top ) - 10;
  window.scrollBy({ // SEE MDN for more on this method
    top: originalTop,
    left: 0,
    behavior: 'smooth'
  });
}

const toTopBtns = document.querySelectorAll('.to-top');
toTopBtns.forEach((topBtn) => {
  topBtn.addEventListener('click', () => {
    console.log("clicked")
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('load', () => {
  const posts = document.querySelectorAll('section');
  let postTops = [];
  let pageTop;
  let counter = 1;
  let prevCounter = 1;
  let doneResizing;

resetPagePosition();

window.addEventListener('resize', () => {
  clearTimeout(doneResizing);
  doneResizing = setTimeout(() => {
    resetPagePosition();
  }, 500);
});

function resetPagePosition(){
  postTops = [];
  posts.forEach((post) => { postTops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset)); });
  const pagePosition = window.pageYOffset + 250;
  counter = 0;

  postTops.forEach(post => {if (pagePosition > post) {counter++;}}); // With counter reset to 0, this will bring it up to whatever it needs to be; Event he first post will cause the coutner to increment to 1.

}
// END OF FUNCTION: resetPagePosition


});

}());
