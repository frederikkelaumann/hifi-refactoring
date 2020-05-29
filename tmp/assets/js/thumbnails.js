document.addEventListener('DOMContentLoaded', function () {
 fetch("https://hifi-corner.herokuapp.com/api/v1/products")
 .then(response => response.json())
 .then(data => {
     console.log(data)
 let thumbnail_grid = document.querySelector(".thumbnail-grid");
 
 data.forEach(produkt => {
 
 let div = document.createElement("div");
 div.className = "thumbnail";
 div.setAttribute("data-id", produkt.sku)
 div.sku = 'p' + produkt.sku
 
 div.innerHTML = `
 <img class="thumbnail__img" src="${produkt.images[0]}" alt="${produkt.make} - ${produkt.model}">
 
 <h2 class="thumbnail__overskrift">${produkt.make} - ${produkt.model}</h2>
 <p class="thumbnail__pris thumbnail__pris_tilbud">TILBUD</p>
 <p class="thumbnail__pris">£ ${produkt.price}</p>
 <a class="thumbnail__button" href="/shop-produkt/?id=${produkt.sku}"> SHOW </a>
 <button class="thumbnail__button thumbnail__button_udsolgt">udsolgt</button>`;

 thumbnail_grid.appendChild(div)
});
 });
});

