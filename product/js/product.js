/*carrusel*/

const carousel = document.querySelector('.carousel__list');
const prevBtn = document.querySelector('.carousel__nav--prev');
const nextBtn = document.querySelector('.carousel__nav--next');
let scrollAmount = 220; // ajustar si tus tarjetas son mÃ¡s anchas

prevBtn.addEventListener('click', () => {
carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Auto-scroll cada 5 segundos
setInterval(() => {
carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}, 5000);
