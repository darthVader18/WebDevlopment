$(document).ready(function () {
  $("#submit").click(function () {
    // debugger;
    var id = $("#id").val();
    var name = $("#name").val();
    var description = $("#description").val();

    $.ajax({
      url: "https://localhost:44376/Employee",
      method: "POST",
      dataType: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        id: id,
        name: name,
        description: description,
      }),
      success: function (data, status, xhr) {
        // success callback function
        $("p").append(
          "Name: " + data.name + " " + "ID: "+ data.id + " " + "Department: " + data.desc
        );
      },
      error: function (request, status, error) {
        alert("Error: " + request.responseText);
      },
    });
  });
});
