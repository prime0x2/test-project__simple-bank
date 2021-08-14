document.getElementById('login-submit').addEventListener('click', function() {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // get user password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    
    if (userEmail == 'test@test.com' && userPass == 'secret') {
        window.location.href = 'dashboard.html';
    }
    else {
        alert('Login Failed...!!!');
    }
});