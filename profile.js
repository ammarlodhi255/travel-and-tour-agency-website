window.onload = () => {
  let user = JSON.parse(sessionStorage.getItem("temp"));
  let pic = document.getElementById("dp");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");

  pic.src = user.Picture;
  name.innerText = user.Name;
  email.innerText = user.Email;
  phone.innerText = user.Phone;
  password.innerText = user.Password;
};

function sign_out() {
  sessionStorage.removeItem("temp");
  document.location.href = "./login.html";
}

function delete_account() {
  let account = JSON.parse(sessionStorage.getItem("temp"));
  let users = JSON.parse(localStorage.getItem("Users"));

  users = users.filter(function (item) {
    return item.Email !== account.Email && item.Password !== account.Password;
  });

  localStorage.setItem("Users", JSON.stringify(users));
  sign_out();
}
function back_to_home() {
  document.location.href = "./home.html";
}

let coverPreview = document.getElementById("dp");
let cover = document.getElementById("cover");

coverPreview.addEventListener("click", (_) => cover.click());

cover.addEventListener("change", (_) => {
  let file = cover.files[0];
  let reader = new FileReader();
  reader.onload = function () {
    coverPreview.src = reader.result;
  };
  reader.readAsDataURL(file);
});
