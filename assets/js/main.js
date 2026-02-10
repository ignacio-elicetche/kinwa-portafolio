document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Navigation --- */
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const closeBtn = document.querySelector('.nav__close-btn');
    const navLinks = document.querySelectorAll('.nav__link');

    if (hamburger && nav) {
        // Toggle menu visibility
        hamburger.addEventListener('click', () => {
            nav.classList.add('active');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        }

        // Close menu when a link is clicked to improve UX
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }


    /* --- Infinite Carousel (Home Page) --- */
    const track = document.querySelector('.carousel-track');

    if (track) {
        // Clone items to create a seamless infinite loop effect
        const cards = Array.from(track.children);
        
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', true); // Hide duplicates from screen readers
            track.appendChild(clone);
        });
    }


    /* --- Booking Form Logic --- */
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mock submission feedback (Replace with API call in production)
            alert('¡Reservation Request Sent! We will contact you shortly to confirm.');
            bookingForm.reset();
        });
    }

});