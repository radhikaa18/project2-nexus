document.getElementById('signupLink').addEventListener('click', function() {
    document.querySelector('.login-container').style.transform = 'translateX(-100%)';
    document.querySelector('.signup-container').style.transform = 'translateX(0)';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.querySelector('.login-container').style.transform = 'translateX(0)';
    document.querySelector('.signup-container').style.transform = 'translateX(100%)';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Add signup form validation and backend connection logic here
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        // Successful signup logic (You can add backend connection here)
        document.getElementById('signupError').textContent = '';
        alert('Signup successful!');
    } else {
        document.getElementById('signupError').textContent = 'Please fill in all fields.';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Add login form validation and backend connection logic here
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Successful login logic (You can add backend connection here)
        document.getElementById('loginError').textContent = '';
        alert('Login successful!');
    } else {
        document.getElementById('loginError').textContent = 'Please fill in all fields.';
    }
});