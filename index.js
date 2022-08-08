window.onload = () => {
    const loginBtn = document.querySelector('.login');
    loginBtn.addEventListener('click', () => {
        loginBtn.setAttribute('href', './login.html');
    });
}