// Product Carousel
let currentSlide = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalSlides = carouselItems.length;

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const offset = currentSlide * -100;
    carouselItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}

// Scroll Animations
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('section-visible');
            section.classList.remove('section-hidden');
        } else {
            section.classList.add('section-hidden');
            section.classList.remove('section-visible');
        }
    });
});

// Back-to-Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
