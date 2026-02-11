// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Contact Form Submitted:', { name, email, message });
        
        // Show success message
        showNotification(`Thank you ${name}! Your message has been sent successfully.`);
        
        // Reset form
        contactForm.reset();
    });
});
