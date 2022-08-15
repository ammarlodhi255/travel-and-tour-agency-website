let loginBtn = document.querySelector("button.signin");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

email.addEventListener("click", reset);
password.addEventListener("click", reset);

function reset() {
  email.style.border = null;
  password.style.border = null;
}
loginBtn.onclick = () => {
  if (email.value === "admin" && password.value === "admin") {
    window.location.href = "./AdminPage.html";
  } else {
    let user = Validate(email.value, password.value);
    if (user) {
      sessionStorage.setItem("temp", JSON.stringify(user));
      document.location.href = "./Profile.html";
    } else {
      email.style.border = "1px solid red";
      password.style.border = "1px solid red";
      alert("Incorrect data .... !");
    }
  }
};
function Validate(email, password) {
  let user = null;
  let users = JSON.parse(localStorage.getItem("Users"));
  users.forEach(function (item) {
    let emailUser = item.Email;
    let passwordUser = item.Password;
    if (emailUser === email && passwordUser === password) {
      user = item;
    }
  });
  return user;
}
function gotoHome() {
  document.location.href = "./home.html"
}