const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 0,
  coverflowEffect: {
    rotate: 50, // Кут повороту слайдів
    stretch: 0, // Розтягнення між слайдами
    depth: 100, // Глибина 3D ефекту
    modifier: 1, // Впливає на інтенсивність ефекту
    slideShadows: true, // Відображення тіней
  },
  simulateTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const calculateHeight = () => {
  const swiperSlideElements = Array.from(document.querySelectorAll('.swiper .swiper-slide'))
  if (!swiperSlideElements.length) return
  const width = swiperSlideElements[0].getBoundingClientRect().width
  const height = Math.round(width / (16 / 9))
  swiperSlideElements.forEach(element => element.style.height = `${height}px`)
}

document.addEventListener("DOMContentLoaded", calculateHeight)
addEventListener('resize', calculateHeight)
