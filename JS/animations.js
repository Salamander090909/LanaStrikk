// Page transition animation
document.addEventListener('DOMContentLoaded', function() {
    // Fade in on page load
    document.body.style.opacity = '1';

    // Handle navigation link clicks for smooth transition
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for anchor links
            if (href.startsWith('#')) {
                return;
            }
            
            // Check if it's an internal link
            if (href && !href.startsWith('http')) {
                e.preventDefault();
                
                // Fade out current page - faster
                document.body.style.transition = 'opacity 0.25s ease-out';
                document.body.style.opacity = '0';
                
                // Navigate after fade out
                setTimeout(() => {
                    window.location.href = href;
                }, 250);
            }
        });
    });
});

