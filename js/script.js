document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name && email && message) {
                formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
                formMessage.className = 'form-message success';
                
                contactForm.reset();
                
                setTimeout(function() {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.className = 'form-message error';
            }
        });
    }
    
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

