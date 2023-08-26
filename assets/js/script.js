let amountImage = 0;

function selected(image, checkImage) {
  if (checkImage.checked) {
    image.classList.add('selected');
    image.innerHTML += selected;
    amountImage++;
    amount.innerHTML = amountImage + " selected" ;
  } else {
    image.classList.remove('selected');
    image.innerHTML = "";
    amountImage--;
    amount.innerHTML = amountImage + " selected" ;
  }
}

function createCardLayout(id) {
  return `
  <div class="card">
    <div class="cardImage">
      <label for="checkImage${id}" id="labelImage${id}">
      <img class="image" id="image${id}" loading="lazy" src="https://source.unsplash.com/random?${Math.floor(Math.random() * 100)}"></label>
      <input type="checkbox" class="checkImage" id="checkImage${id}" onclick="selected(image${id},this);">
    </div>
  </div>
  `;
}

function addCards() {
  var images = document.getElementById("images");
  var amount = document.getElementById("amount");
  amount.innerHTML = amountImage + " selected" ;
  for (let i = 0; i < 12; i++) {
    images.innerHTML += createCardLayout(i);
  }
}