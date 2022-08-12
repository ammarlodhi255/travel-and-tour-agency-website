window.onload = () => {
    const loginBtn = document.querySelector('.login');
    const signupBtn = document.querySelector('.signup');
    const aboutBtn = document.querySelector('.about');
    const closeBtn = document.querySelector('.close-btn');
    loginBtn.addEventListener('click', () => {
        loginBtn.setAttribute('href', './login.html');
    });
    signupBtn.addEventListener('click', () => {
        signupBtn.setAttribute('href', './signup.html');
    });
    aboutBtn.addEventListener('click', () => {
        aboutBtn.setAttribute('href', './about.html');
        console.log('mdjnj');
    });
}

