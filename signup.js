let signupBtn = document.querySelector("button.signup");
signupBtn.onclick = () => {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  let password = document.querySelector("#password");

  let new_user = {
    Picture: "",
    Name: name.value,
    Email: email.value,
    Phone: phone.value,
    Password: password.value,
  };
  let users = JSON.parse(localStorage.getItem("Users"));
  users.push(new_user);
  localStorage.setItem("Users", JSON.stringify(users));

  let label = document.createElement("label");
  label.innerText = "User successfully added";
  label.style.color = "green";
  label.style.margin = "5em";
  signupBtn.parentElement.appendChild(label);

  name.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
};

function openLoginForm() {
  document.location.href = "./login.html";
}
