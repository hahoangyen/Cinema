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

// https://www.w3schools.com/howto/howto_js_slideshow.asp 
if (document.getElementById("slider")) {
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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slide-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slide-active";
  }
}
// sleep function 
function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
const submit = document.getElementById("submit");
if (submit) {
  submit.addEventListener('click', validate);

  //form validation function
  async function validate(e) {
    e.preventDefault();

    //declare field to validate
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const msgField = document.getElementById("message");
    const msgError = document.getElementById("msgError");
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
    //form validation function

    //send condition
    if (nameField.value != null && emailField.value.match(validEmailRegex) && msgField.value.length >= 10) {
      await sleep(1500);
      document.getElementById("form-message-success").style.visibility = "visible";
    }
  }
}

const register = document.getElementById("register");
if (register) {
  register.addEventListener('click', registration);

  //form validation function
  async function registration(e) {
    e.preventDefault();

    //declare field to validate
    const firstnameField = document.getElementById("firstname");
    const lastnameField = document.getElementById("lastname");
    const usernameField = document.getElementById("username");
    const emailField = document.getElementById("email");
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passField1 = document.getElementById("password1");
    const passField2 = document.getElementById("password2");
    const passError1 = document.getElementById("passError1");
    const passError2 = document.getElementById("passError2");
    const termCheckbox = document.getElementById("term-checkbox");
    const termError = document.getElementById("termError");
    //validation condition

    if (!firstnameField.value) {
      firstnameField.classList.add("invalid");
    } else firstnameField.classList.remove("invalid");

    if (!lastnameField.value) {
      lastnameField.classList.add("invalid");
    } else lastnameField.classList.remove("invalid");

    if (!usernameField.value) {
      usernameField.classList.add("invalid");
    } else usernameField.classList.remove("invalid");

    if (!emailField.value.match(validEmailRegex)) {
      emailField.classList.add("invalid");
    } else emailField.classList.remove("invalid");

    if (!passField1.value.match(validPassRegex)) {
      passField1.classList.add("invalid");
      passError1.classList.add("visible");
      passError1.setAttribute("aria-hidden", false);
      passError1.setAttribute("aria-invalid", true);
    } else {
      passField1.classList.remove("invalid");
      passError1.classList.remove("visible");
    }

    if (!(passField1.value === passField2.value)) {
      passField2.classList.add("invalid");
      passError2.classList.add("visible");
      passError2.setAttribute("aria-hidden", false);
      passError2.setAttribute("aria-invalid", true);
    } else {
      passField2.classList.remove("invalid");
      passError2.classList.remove("visible");
    }
    if (!termCheckbox.checked){
      termCheckbox.classList.add("invalid");
      termError.classList.add("visible");
      termError.setAttribute("aria-hidden", false);
      termError.setAttribute("aria-invalid", true);
    } else {
      termCheckbox.classList.remove("invalid");
      termError.classList.remove("visible");
    }
    //form validation function

    //send condition

    if (firstnameField.value != "" && lastnameField.value != "" && usernameField.value != "" && emailField.value.match(validEmailRegex) && passField1.value.match(validPassRegex) && passField1.value === passField2.value && termCheckbox.checked) {
      await sleep(1500);
      document.getElementById("form-register-success").style.visibility = "visible";
    }
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



