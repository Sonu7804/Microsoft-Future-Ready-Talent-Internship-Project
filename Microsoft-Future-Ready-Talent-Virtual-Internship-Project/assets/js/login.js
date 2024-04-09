document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === 'admin' && password === 'password') {
        // Redirect to dashboard.html
        window.location.href = 'dashboard.html';
    } else {
        // Show error message or handle invalid login
        alert('Invalid username or password. Please try again.');
    }
});
