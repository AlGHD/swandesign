document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});

// Selectors for the navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation menu on mobile view
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
})

// Scroll animation for sections
const sections = document.querySelectorAll('.section, .about-section, .video-3d-section, .services-section, .contact-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
})

// Enhanced carousel functionality with auto-slide
let autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 5000);

// Pause on hover
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Resume on leave
carouselContainer.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);
})

// Form validation and submission
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name && email && message) {
        alert('Thank you for your message!');
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
