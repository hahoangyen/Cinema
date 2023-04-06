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
}
  // sleep function 
 function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slide-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//contact-form
const submit = document.getElementById("submit");

submit.addEventListener('click', (validate));

//form validation function
async function validate(e) {
  e.preventDefault();

  //declare field to validate
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const msgField = document.getElementById("message");
  const msgError = document.getElementById("msgError");
  //const passField= document.getElementById("password");
  //const passField2= document.getElementById("password2");
  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //validation condition
  if (!nameField.value) {
    nameField.classList.add("invalid");
  } else nameField.classList.remove("invalid");

  if (!emailField.value.match(validEmailRegex)) {
    emailField.classList.add("invalid");
  } else emailField.classList.remove("invalid");

  if (msgField.value.length < 10) {
    msgField.classList.add("invalid");
    msgError.classList.add("visible");
    msgError.setAttribute("aria-hidden", false);
    msgError.setAttribute("aria-invalid", true);
  } else {
    msgField.classList.remove("invalid");
    msgError.classList.remove("visible");}


  //send condition
  if (nameField.value != "" && emailField.value.match(validEmailRegex) && msgField.value.length >= 10) {
    await sleep(1500);
    document.getElementById("form-message-success").style.visibility = "visible";
  }
}



