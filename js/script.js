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
const submit = document.getElementById("submit");

submit.addEventListener('click', validate);

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
    msgError.classList.remove("visible");
  }


  //send condition
  if (nameField.value != "" && emailField.value.match(validEmailRegex) && msgField.value.length >= 10) {
    await sleep(1500);
    document.getElementById("form-message-success").style.visibility = "visible";
  }
}
//display showing and coming tab
function show(type) {
  var tab = document.querySelector(`.main-movies-content[data-toggle="${type}"] .main-movies-pane`);
  var otherTab = document.querySelector(`.main-movies-content[data-toggle="${type === 'showing' ? 'coming' : 'showing'}"] .main-movies-pane`);
  tab.style.display = "flex";
  otherTab.style.display = "none";

  var activeBtn = document.querySelector('.main-movies-nav .content-active');
  if (activeBtn) {
    activeBtn.classList.remove('content-active');
  }
  document.querySelector(`#${type}`).classList.add('content-active');
}

//read more read less
function readMore(movie) {
  // var dots = document.querySelector(`.review-movie-pane[data-movies="${movie}"] #dots`);
  var dots = document.querySelector(`#${movie} #dots`);
  var moreText = document.querySelector(`#${movie} #more`);
  var btnText = document.querySelector(`#${movie} #readMoreBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//open mobile nav
function openNav() {
  var x = document.getElementById("mobileNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// https://www.w3schools.com/howto/howto_js_curtain_menu.asp
//overlay trailer
// Open
function openOverlay(element) {
  var link = element.getAttribute('link');
  console.log(link);
  document.getElementById("overlay-nav").style.display = "block";
  document.getElementById("youtube-trailer").src = link;
}
/* Close */
function closeOverlay() {
  document.getElementById("overlay-nav").style.display = "none";
  document.getElementById("youtube-trailer").src = "";
}



