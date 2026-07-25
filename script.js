// ========================================
// HAMBURGER MENU
// ========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================
// CONTACT FORM VALIDATION
// ========================================
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('formSuccess');

// Real-time validation
nameInput.addEventListener('input', () => validateName());
emailInput.addEventListener('input', () => validateEmail());
messageInput.addEventListener('input', () => validateMessage());

function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 2) {
        nameInput.classList.add('error');
        nameError.classList.add('show');
        return false;
    }
    nameInput.classList.remove('error');
    nameError.classList.remove('show');
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
        emailInput.classList.add('error');
        emailError.classList.add('show');
        return false;
    }
    emailInput.classList.remove('error');
    emailError.classList.remove('show');
    return true;
}

function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length < 10) {
        messageInput.classList.add('error');
        messageError.classList.add('show');
        return false;
    }
    messageInput.classList.remove('error');
    messageError.classList.remove('show');
    return true;
}

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    if (isNameValid && isEmailValid && isMessageValid) {
        // Show success message
        successMsg.style.display = 'block';
        successMsg.style.animation = 'fadeInUp 0.5s ease';
        
        // Reset form
        form.reset();
        
        // Remove error states
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
            el.classList.remove('error');
        });
        document.querySelectorAll('.error-message').forEach(el => {
            el.classList.remove('show');
        });
        
        // Hide success after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }
});

// ========================================
// SMOOTH SCROLL FOR NAV LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL ANIMATION - Fade In On Scroll
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.service-card, .testimonial-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('🚀 NorthPeak Digital - Built for Digital Heroes Training Task');