// function clearFields() {
//     document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]').forEach(input => input.value = '');
// }

function cancelReverse() {
    window.location.href = 'logout.html';
}

function verifyRegisterValues(email, username, password, confirmPassword){
    if(email === '' || username === '' || password === '' || confirmPassword === ''){
        alert('Please fill all fields');
        return false;
    }
    else if(password !== confirmPassword){
        alert('Passwords do not match');
        return false;
    }
    else if(password.length < 8){
        alert('Password must be at least 8 characters long');
        return false;
    }
    else if(!email.includes('@')){
        alert('Invalid email');
        return false;
    }
    else{
        return true;
    }
}

function signUp(){
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-repeat').value;
    if(verifyRegisterValues(email, username, password, confirmPassword)){
        register(email, username, password);
        
    }
}

function register(email, username, password){
    if (registerServer(email, username, password)){
        alert('Reg0oo0k0k0ikistration successful');
        localStorage.setItem('user', username);
        window.location.href = "index.html";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('email').value = 'test@email.com';
    document.getElementById('username').value = 'testuser';
    document.getElementById('password').value = 'password123';
    document.getElementById('password-repeat').value = 'password123';
});

function registerServer(email, username, password) {
    const data = { 'Email': email, 'Username': username, 'Password': password };
    console.log('data:', data);
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorText => {
                throw new Error(`Error from server: ${errorText}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('User added:', data);
        alert(`User ${data.Username} added successfully!`);
        return true;
        
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error adding user: ' + error.message);
    });
    return;
}
