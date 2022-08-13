let signupBtn = document.querySelector("button.signup");
signupBtn.onclick = () => {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let password = document.querySelector("#password").value;

  console.log(name + " : " + phone);
  console.log(email + " : " + password);
};
