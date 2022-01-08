// hero
document.getElementById("btn-hero").addEventListener("click", function () {
  window.location.href = "/masuk";
});

$("#testimony-carousel").owlCarousel({
  stagePadding: 10,
  loop: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
