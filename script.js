function checkPasswordStrength() {
    var strengthBar = document.getElementById('strength');
    var strengthText = document.getElementById('strength-text');
    var password = document.getElementById('password').value;
    var strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    var colors = ['red', 'orange', 'yellow', 'green'];
    var messages = ['Muito fraca', 'Fraca', 'Média', 'Forte'];
    
    strengthBar.style.width = (strength * 25) + '%';
    strengthBar.style.backgroundColor = colors[strength - 1] || 'red';
    strengthText.textContent = messages[strength - 1] || 'Muito fraca';
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}