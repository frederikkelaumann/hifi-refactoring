"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var amplifier = document.getElementById('amp');
  var speakers = document.getElementById('speak');
  var turntables = document.getElementById('turn');
  var cd_players = document.getElementById('cd');
  fetch('../data/produkts.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    //henter alle amplifiers
    amplifier.addEventListener('click', function (event) {
      event.preventDefault();
      var results = data.produkter.filter(function (produkt) {
        return produkt.product.includes('amplifier');
      });
      console.log(results);

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          var selected = document.getElementById('p' + element.id);
          selected.style.display = 'block';
        });
      }
    }); //henter alle speakers

    speakers.addEventListener('click', function (event) {
      event.preventDefault();
      var results = data.produkter.filter(function (produkt) {
        return produkt.product.includes('speakers');
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          var selected = document.getElementById('p' + element.id);
          selected.style.display = 'block';
        });
      }
    }); //henter alle turntables

    turntables.addEventListener('click', function (event) {
      event.preventDefault();
      var results = data.produkter.filter(function (produkt) {
        return produkt.product.includes('turntables');
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          var selected = document.getElementById('p' + element.id);
          selected.style.display = 'block';
        });
      }
    }); //henter alle cd players

    cd_players.addEventListener('click', function (event) {
      event.preventDefault();
      var results = data.produkter.filter(function (produkt) {
        return produkt.product.includes('CD Players');
      });

      if (results) {
        var allelm = document.querySelectorAll('.thumbnail');
        allelm.forEach(function (element) {
          element.style.display = 'none';
        });
        results.forEach(function (element) {
          var selected = document.getElementById('p' + element.id);
          selected.style.display = 'block';
        });
      }
    });
  });
});
//# sourceMappingURL=products-filter.js.map
