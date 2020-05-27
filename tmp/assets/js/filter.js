"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var price1 = document.querySelector('.price_1');
  var price2 = document.querySelector(".price_2");
  fetch('../data/produkts.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log(data);
    price1.addEventListener("click", function (event) {
      event.preventDefault();
      var results = data.produkter.filter(function (produkt) {
        return +produkt['original-price'].replace("£", "") <= 799;
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
          element.setAttribute("hidden", true);
        });
        results.forEach(function (element) {
          console.log(element.id);
          var selected = document.getElementById('p' + element.id);
          selected.style.display = 'block';
        });
      }
    });
  });
  fetch('../data/produkts.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log(data);
    price2.addEventListener("click", function (event) {
      event.preventDefault();
      var results = data.produkter.filter(function (produkt) {
        return +produkt['original-price'].replace("£", "") >= 800 && +produkt['original-price'].replace("£", "") <= 900;
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
          element.setAttribute("hidden", true);
        });
        results.forEach(function (element) {
          console.log(element.id);
          var selected = document.getElementById('p' + element.id);
          selected.style.display = 'block';
        });
      }
    });
  });
});
//# sourceMappingURL=filter.js.map
