// Get enter key
// Get the input field
var input = document.getElementById("txtLookfor"); //replace by input field ID

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(enterEvent) {
  // If the user presses the "Enter" key on the keyboard
  if (enterEvent.key === "Enter") {
    // Cancel the default action, if needed
    enterEvent.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchBtn").click(); //replace by button ID
  }
});


// search function
function search() {
    var site = 'google.com';
    var lookfor = document.getElementById("txtLookfor").value;
    var query="http://www.google.com/search?q=" + encodeURIComponent(lookfor);
    location.href = query;
}

//form validation
const submit = document.getElementById("submit");

submit.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const passField= document.getElementById("password");
  const passField2= document.getElementById("password2");
  
  if (!nameField.value) {
    nameField.classList.add("invalid");
    // const nameError = document.getElementById("nameError");
    // nameError.classList.add("visible");
    // nameError.setAttribute('aria-hidden', false);
    // nameError.setAttribute('aria-invalid', true);
  }  else nameField.classList.remove("invalid");
  if (!emailField.value) {
    emailField.classList.add("invalid");
  } else emailField.classList.remove("invalid");
  if (!passField.value) {
    passField.classList.add("invalid");
  } else passField.classList.remove("invalid");
   return valid;
}




