let loginBtn = document.querySelector("button.signin");
loginBtn.onclick = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  console.log(email + " : " + password);
};
