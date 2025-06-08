document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-content, .project-card, .info-card, .form-group');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const setInitialState = function() {
        const elements = document.querySelectorAll('.timeline-content, .project-card, .info-card, .form-group');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    };

    // Floating navigation active state
    const updateNavDots = function() {
        const sections = document.querySelectorAll('section');
        const navDots = document.querySelectorAll('.nav-dot');
        
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            
            if (rect.top <= 100 && rect.bottom >= 100) {
                navDots.forEach(dot => dot.classList.remove('active'));
                navDots[index].classList.add('active');
            }
        });
    };

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize
    setInitialState();
    animateOnScroll();
    updateNavDots();
    
    // Event listeners
    window.addEventListener('scroll', function() {
        animateOnScroll();
        updateNavDots();
    });

    // Skill bars animation
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.querySelector('::after').style.width = level + '%';
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show a success message
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.backgroundColor = '#4BB543';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                submitBtn.style.backgroundColor = '';
            }, 3000);
        });
    }
});