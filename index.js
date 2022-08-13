window.onload = () => {
  const loginBtn = document.querySelector(".login");
  const signupBtn = document.querySelector(".signup");
  const aboutBtn = document.querySelector(".about");
  const closeBtn = document.querySelector(".close-btn");
  const searchBtn = document.getElementById("searchBtn");
  loginBtn.addEventListener("click", () => {
    loginBtn.setAttribute("href", "./login.html");
  });
  signupBtn.addEventListener("click", () => {
    signupBtn.setAttribute("href", "./signup.html");
  });
  aboutBtn.addEventListener("click", () => {
    aboutBtn.setAttribute("href", "./about.html");
  });
};

searchBtn.onclick = () => {
  let searchText = document.getElementById("searchText").value;
  if (searchText.length === 0) {
    let container = document.querySelector(".main-section");
    container.innerHTML = "";
    let div = document.createElement("div");
    div.style.height = "200px";
    div.style.textAlign = "center";
    let invalidMessage = document.createElement("h1");
    invalidMessage.style.marginTop = "10%";
    invalidMessage.innerText = `Invalid Input`;
    div.appendChild(invalidMessage);
    container.appendChild(div);
    return;
  }
  SearchPackages(searchText);
};

function SearchPackages(searchText) {
  let container = document.querySelector(".main-section");
  container.innerHTML = "<br /><br />";
  container.classList.add("container");

  let h1 = document.createElement("h1");
  h1.innerText = `Searched text is \'${searchText}\'`;
  container.append(h1);

  let searchclosebtn = document.createElement("a");
  searchclosebtn.innerText = "Close";
  searchclosebtn.classList.add("btn");
  searchclosebtn.classList.add("btn-book");
  searchclosebtn.style.float = "right";
  searchclosebtn.onclick = ()=> {
    document.location.reload();
  };
  container.append(searchclosebtn);
  container.innerHTML += "<br />";

  let divInside = document.createElement("div");
  divInside.classList = "row text-center justify-content-between g-4";

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let packages = JSON.parse(xhr.responseText).Packages;
      packages.forEach(function (item) {
        if (
          item.Title.search(searchText) != -1 ||
          item.Description.search(searchText) != -1
        ) {
          setValues(item, divInside);
        }
      });
      container.append(divInside);
    }
  };
  xhr.open("GET", "JSON_Data.json");
  xhr.send();
}

function setValues(item, divInside) {
  let div = document.createElement("div");
  div.classList.add("col-md-4");
  div.innerHTML = `<div class="card bg-light text-dark package">
        <img src="${item.dp_url}" class="card-img-top" />
        <div class="card-body text-center">
          <h5 class="card-title">${item.Title}</h5>
          <p class="card-text">
            ${item.Description}
            <span class="pricing"> Book Now for per head Rs ${item.Pricing.Single}</span>
            <span class="pricing">
              Book Now for per couple Rs ${item.Pricing.Couple}</span
            >
          </p>
          <a href="${item.Url}" class="btn btn-book">Book Now</a>
        </div>
      </div>`;
  divInside.append(div);
}
