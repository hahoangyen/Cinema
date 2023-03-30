
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





