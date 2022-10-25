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
      success: function (fileDetails) {
        console.log(fileDetails);
        var tbodyHtml = "";
        fileDetails.forEach((element) => {
          var trHtml =
            "<tr><td><a href='/file/" +
            element.file_name +
            "' >" +
            element.file_name +
            "</a></td><td>" +
            element.modified_date +
            "</td></tr>";
          tbodyHtml = tbodyHtml + trHtml;
        });
        $("#fileTable tbody").html(tbodyHtml);
        $("#fileTable").removeClass("invisible");
      },
    });
  });
});
