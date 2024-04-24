const row = document.getElementById("cards");
const sort = document.getElementById("sort");


fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {renderUI(data)
    document.getElementById("lth").addEventListener("click", () => {
      let newData = data.sort((a, b) => a.price - b.price);
      renderUI(newData);
    });
    document.getElementById("htl").addEventListener("click", () => {
      let newData = data.sort((a, b) => b.price - a.price);
      renderUI(newData);
    });
    document.getElementById("az").addEventListener("click", () => {
        let newData = data.sort((a, b) => a.title.localeCompare(b.title));
        renderUI(newData);
      });
      document.getElementById("za").addEventListener("click", () => {
        let newData = data.sort((a, b) => b.title.localeCompare(a.title));
        renderUI(newData);
      });
  });

function renderUI(list) {
  let innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    innerHTML += `
    <div class="card" style="width: 18rem">
    <img height="280px  " src="${list[i].image}" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">${list[i].title}</h5>
      <p class="card-price">${list[i].price}$</p>
      <p class="card-text">${list[i].description}</p>
    </div>
  </div>
    
    `;
  }
  row.innerHTML = innerHTML;
}

function searchPost(e) {
  e.preventDefault();
  const searchTerm = document.getElementById("searchInp").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i]
      .querySelector(".card-title")
      .textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

document.getElementById("searchInp").addEventListener("input", searchPost);
