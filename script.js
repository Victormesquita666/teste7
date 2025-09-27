const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;
let currentIndex = 0;

function nextSlide() {
  const slideWidth = slides.clientWidth / totalSlides; // largura dinâmica
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Mudar slide a cada 3 segundos
setInterval(nextSlide, 3000);
