document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateEmail(email) && validatePassword(password)) {
            // Simulate login process (replace this with your actual login logic)
            alert('Login successful!'); // Display a message for successful login
            // Redirect to the dashboard or another page
            // window.location.href = 'dashboard.html';
        } else {
            alert('Invalid email or password. Please try again.'); // Display an error message
        }
    });

    function validateEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        // Password must be at least 6 characters long
        return password.length >= 6;
    }
});
