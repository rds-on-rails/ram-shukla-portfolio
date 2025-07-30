// Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const formGroups = contactForm.querySelectorAll('.form-group');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    // Form validation
    function validateForm() {
        let isValid = true;
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (!input.value.trim()) {
                group.classList.add('error');
                isValid = false;
            } else {
                group.classList.remove('error');
            }
        });
        return isValid;
    }

    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) return;

        // Add loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            // Here you would typically send the form data to a server
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Reset form and show success message
            contactForm.reset();
            alert('Thank you for your message! I will get back to you soon.');
        } catch (error) {
            alert('Sorry, there was an error sending your message. Please try again.');
        } finally {
            // Remove loading state
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message';
        }
    });

    // Clear error on input focus
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        input.addEventListener('focus', () => {
            group.classList.remove('error');
        });
    });
}

// Intersection Observer for Animations
const animateOnScroll = () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
};

// Initialize animations
animateOnScroll();

// Add animation classes to elements that should animate
const addAnimations = () => {
    document.querySelectorAll('.animate').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
};

// Add animation classes to elements that are already in view
addAnimations();
