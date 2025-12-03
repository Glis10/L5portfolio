const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.main-nav ul');

if (menuButton && navLinks) {
    function toggleMenu() {
        navLinks.classList.toggle('open');
        
        const isExpanded = navLinks.classList.contains('open');
        menuButton.setAttribute('aria-expanded', isExpanded);
        menuButton.innerHTML = isExpanded ? '✕' : '☰'; 
    }

    menuButton.addEventListener('click', toggleMenu);

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
}

const contactForm = document.getElementById('contact-form');
const contactSection = document.getElementById('contact');

const messageDiv = document.createElement('div');
messageDiv.id = 'form-message';
contactSection.appendChild(messageDiv); 


if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();

        if (nameInput === '' || emailInput === '' || messageInput === '') {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
            messageDiv.style.color = 'green';
            contactForm.reset();
            
            setTimeout(() => {
                messageDiv.textContent = '';
            }, 5000);
        }
    });
}