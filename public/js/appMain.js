$(document).ready(function () {
  $("#file_tab a")
    .filter(".nav-link")
    .click(function (e) {
      e.preventDefault();
      $(this).tab("show");
    });
});
