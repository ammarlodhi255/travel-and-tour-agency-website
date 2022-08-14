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
    if (Validate(email.value, password.value)) {
      let data = `${email.value}(@)${password.value};`;
      document.cookie = `data=${data};`;
      document.location.href = "./Profile.html";
    } else {
      email.style.border = "1px solid red";
      password.style.border = "1px solid red";
      alert("Incorrect data .... !");
    }
  }
};
function Validate(email, password) {
  let flag = false;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let users = JSON.parse(xhr.responseText).Users;
      users.forEach(function (item) {
        let emailUser = item.Email;
        let passwordUser = item.Password;
        console.log(emailUser + " : " + password);
        console.log(emailUser === email);
        if (emailUser === email && passwordUser === password) {
          flag = true;
        }
      });
    }
  };
  xhr.open("GET", "JSON_Data.json");
  xhr.send();
  return true;
}
