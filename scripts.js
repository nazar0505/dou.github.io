let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(slideIndex) {
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = slideIndex;
    }

    // Змінюємо положення слайдера
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Оновлюємо точки
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Автоматичне переключення кожні 5 секунд
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Події для точок навігації
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});
