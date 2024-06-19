// script.js

// Add your custom JavaScript here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready');
    // Example: Add event listener to the form submit button
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been sent.`);
    });
});
