function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let currentSlide = 0;

function moveSlide(step) {
  const slider = document.querySelector('.slider');
  const items = document.querySelectorAll('.slider-item');
  const totalItems = items.length;

  // Calculate the new slide index
  currentSlide += step;

  // If the slide index exceeds the total items, loop back
  if (currentSlide >= totalItems) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = totalItems - 1;
  }

  // Move the slider to the new position
  slider.style.transform = `translateX(-${currentSlide * (items[0].offsetWidth + 20)}px)`;
}
