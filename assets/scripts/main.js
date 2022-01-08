// navbar
window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("topbar").classList.add("bg-white");
    document.getElementById("topbar").classList.add("shadow-add");
  } else {
    document.getElementById("topbar").classList.remove("bg-white");
    document.getElementById("topbar").classList.remove("shadow-add");
  }
};

$(document).ready(function () {
  $("#other").click(function (event) {
    event.preventDefault();
    $("#other-menus").toggleClass("show");

    $("body").toggleClass("hidden");
  });
});
