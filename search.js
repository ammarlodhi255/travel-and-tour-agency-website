let searchBtn = document.getElementById("searchBtn");

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
  searchText = searchText.toLowerCase();

  let container = document.querySelector(".main-section");
  container.innerHTML = "<br /><br />";
  container.classList.add("container");

  let h1 = document.createElement("h1");
  h1.innerText = `Searched text is \'${searchText}\'`;
  container.append(h1);
  container.innerHTML += "<br />";

  let divInside = document.createElement("div");
  divInside.classList = "row text-center justify-content-between g-4";

  let packages = JSON.parse(localStorage.getItem("Packages"));
  packages.forEach(function (item) {
    let title = item.Title.toLowerCase();
    let desc = item.Description.toLowerCase();
    if (title.search(searchText) != -1 || desc.search(searchText) != -1) {
      setValues(item, divInside);
    }
  });
  container.append(divInside);
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
