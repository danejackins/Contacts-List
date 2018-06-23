// add contact functionality
$("input[type=submit]").on("click", function(event) {
  event.preventDefault();

  const newContact = {
    firstName: $("#firstName").val().trim(),
    lastName: $("#lastName").val().trim(),
    contactType: $("#contactType").val().trim(),
    phoneNumber: $("#phoneNum").val().trim(),
    emailAddress: $("#emailAddr").val().trim()
  }

  $.ajax("/api/contacts", {
    method: "POST",
    data: newContact
  }).then(function(response) {
    console.log(response);
    location.href = "/";
  });
});

// delete contact functionality
$(".delete").on("click", function(event) {
  const id = $(this).attr("data-id");
  console.log(id);
  $.ajax({
    method: "DELETE",
    url: "/api/contacts/" + id
  }).then(function(response) {
    location.href = "/";
  });
});