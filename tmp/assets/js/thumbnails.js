"use strict";

document.addEventListener('DOMContentLoaded', function () {
  fetch("data/produkts.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var thumbnail_grid = document.querySelector(".thumbnail-grid");
    data.produkter.forEach(function (produkt) {
      var div = document.createElement("div");
      div.className = "thumbnail";
      div.setAttribute("data-id", produkt.id);
      div.id = 'p' + produkt.id;
      div.innerHTML = "\n <img class=\"thumbnail__img\" src=\"/images/Produktbilleder/".concat(produkt.image, "\" alt=\"").concat(produkt.title, "\">\n \n <h2 class=\"thumbnail__overskrift\">").concat(produkt.title, "</h2>\n <p class=\"thumbnail__pris thumbnail__pris_tilbud\">").concat(produkt["original-price"], "</p>\n <p class=\"thumbnail__pris\">").concat(produkt["original-price"], "</p>\n <a class=\"thumbnail__button\" href=\"shop-produkt.html?id=").concat(produkt.id, "\"> SHOW </a>\n <button class=\"thumbnail__button thumbnail__button_udsolgt\">udsolgt</button>");
      thumbnail_grid.appendChild(div);
    });
  });
});
//# sourceMappingURL=thumbnails.js.map
