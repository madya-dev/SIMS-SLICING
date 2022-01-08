$(document).ready(function () {
  $("#btn-edit-photo").click(function () {
    $("#input-photo").click();
  });

  setInterval(function () {
    if ($("#check-pw").is(":checked")) {
      $("#pw-wrapper").css("display", "block");
    } else {
      $("#pw-wrapper").css("display", "none");
    }
  }, 50);
});
