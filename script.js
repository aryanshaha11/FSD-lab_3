// Change the text content and style of the title
document.getElementById("mainTitle").innerHTML =
  "Welcome to My Updated Web Page";
document.getElementById("mainTitle").style.color = "blue";
document.getElementById("mainTitle").style.position = "relative";
document.getElementById("mainTitle").style.left = "10px";

// Change image source on button click
document
  .getElementById("changeImageBtn")
  .addEventListener("click", function () {
    document.getElementById("image").src = "./image3.jpg";
  });

// Add text node to a parent node
const resultDiv = document.getElementById("result");
const newText = document.createTextNode("This text was added dynamically!");
resultDiv.appendChild(newText);

// Delete a node after form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const textInput = document.getElementById("textInput").value;
  resultDiv.innerHTML += `<br>You submitted: ${textInput}`;

  // Clear the input
  document.getElementById("textInput").value = "";
});

// Using jQuery to manipulate elements
$(document).ready(function () {
  // Change button text using jQuery
  $("#changeButtonText").click(function () {
    $(this).text("Button Text Changed!");
  });

  // Set background-image using jQuery CSS property
  $("#setBackground").click(function () {
    $("body").css("background-image", "url('bg_image.JPEG')");
  });

  // Access HTML form data using jQuery
  $("#myForm").on("submit", function (event) {
    event.preventDefault();
    const inputValue = $("#textInput").val();
    $("#result").append(`<br>You entered: ${inputValue}`);
    $("#textInput").val(""); // Clear input
  });

  // Add attribute using jQuery
  $("#changeImageBtn").attr("title", "Click to change the image");
});
