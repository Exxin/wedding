let slideIndex = 0;

function changeSlide(n) {
  const slides = document.querySelectorAll('.collect-item');
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  const slider = document.querySelector('.collect-list');
  slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Swipe functionality
let startX;

function startTouch(e) {
  startX = e.touches[0].clientX;
}

function moveTouch(e) {
  if (!startX) {
    return;
  }

  let currentX = e.touches[0].clientX;
  let diffX = startX - currentX;

  if (diffX > 0) {
    // Swiped left
    changeSlide(1);
  } else {
    // Swiped right
    changeSlide(-1);
  }

  startX = null;
}

// Add event listeners for swipe functionality
const slider = document.querySelector('.collect-list');
slider.addEventListener('touchstart', startTouch, false);
slider.addEventListener('touchmove', moveTouch, false);
