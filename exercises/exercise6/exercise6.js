//Exercise 6 by Teodora Pencheva
//REFERENCE: (1) https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// I used this code to help me validate my input

//Email Validation (1)
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const email = $("#email").val();

  if (validateEmail(email)) {
    $("#email").css({
    	"border-color": "#36bc74",
    	"color": "#36bc74"
    });
  } else {
    $("#email").css({
    	"border-color": "#f35800",
    	"color": "#f35800"
    });
  }
  return false;
}

$("#validate").on("click", validate);



console.log("exercise 6");