$(document).ready(function () {
  $("#file_tab a")
    .filter(".nav-link")
    .click(function (e) {
      e.preventDefault();
      $(this).tab("show");
    });

  $("#searchBtn").click(function () {
    console.log("btn clicked");
    var dataBody = { fileName: $("#fileName").val() };
    $.ajax({
      url: "fileSearch",
      type: "POST",
      dataType: "json",
      contentType: "application/json;charset=utf-8",
      data: JSON.stringify(dataBody),
      success: function (result) {
        console.log(result);
      },
    });
  });
});
