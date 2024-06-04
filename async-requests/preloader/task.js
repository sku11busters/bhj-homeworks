const loader = document.getElementById("loader");
const items = document.getElementById("items");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function loadCurrency() {
  showLoader();

  fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
    .then((response) => response.json())
    .then((data) => {
      hideLoader();

      items.innerHTML = "";
      const valute = data.response.Valute;
      Object.keys(valute).forEach((currency) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
                            <div class="item__code">
                                ${valute[currency].CharCode}
                            </div>
                            <div class="item__value">
                                ${valute[currency].Value}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                        `;
        items.appendChild(item);
      });
    });
}

loadCurrency();