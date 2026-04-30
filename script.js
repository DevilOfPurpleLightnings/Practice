// Автоматичне підсвічування активного посилання в меню
const navLinks = document.querySelectorAll('.nav-links a');
// Отримуємо назву поточного файлу (наприклад, about.html)
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

// Логіка зникнення меню при скролі вниз і появи при скролі вгору
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Якщо скролимо вниз і прокрутили більше ніж висота меню (щоб не блимало на самій горі)
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        navbar.classList.add('nav-hidden'); // Ховаємо
    } else {
        navbar.classList.remove('nav-hidden'); // Показуємо
    }
    
    lastScrollTop = scrollTop;
});