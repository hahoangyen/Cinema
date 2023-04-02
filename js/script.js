// Get enter key
// Get the input field
var input = document.getElementById("txtLookfor"); //replace by input field ID

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (enterEvent) {
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
  var query = "http://www.google.com/search?q=" + encodeURIComponent(lookfor);
  location.href = query;

  // sleep function 
} function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}


const submit = document.getElementById("submit");

submit.addEventListener('click', (validate));

//form validation function
async function validate(e) {
  e.preventDefault();

  //declare field to validate
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const msgField = document.getElementById("message"); 
  //const passField= document.getElementById("password");
  //const passField2= document.getElementById("password2");

  //validation condition
  if (!nameField.value) {
    nameField.classList.add("invalid");
  } else nameField.classList.remove("invalid");

  if (!emailField.value) {
    emailField.classList.add("invalid");
  } else emailField.classList.remove("invalid");

  if (!msgField.value) {
    msgField.classList.add("invalid");
  } else msgField.classList.remove("invalid");


  //send condition
  if (nameField.value != "" && emailField.value != "" && msgField.value != "") {
    await sleep(1500);
    document.getElementById("form-message-success").style.visibility = "visible";

  }
}



