window.onload = () => {
    const loginBtn = document.querySelector('.login');
    const signupBtn = document.querySelector('.signup');
    const closeBtn = document.querySelector('.close-btn');
    loginBtn.addEventListener('click', () => {
        loginBtn.setAttribute('href', './login.html');
    });
    signupBtn.addEventListener('click', () => {
        signupBtn.setAttribute('href', './signup.html');
    });
}

