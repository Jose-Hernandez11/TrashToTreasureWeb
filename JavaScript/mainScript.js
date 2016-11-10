function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
    function validateForm(){
  var Username = document.forms["myForm"]['Username'].value;
  if (Username==null || Username== "") {
    alert ("first name is required");
    return false;
  }
  if (Username.length <9 ) {
    alert ("first name have to be more then 9 character");
    return false;
  }
   var Password = document.forms["myForm"]['Password'].value;
  if (Password==null || Password== "") {
    alert ("first name is required");
    return false;
  }
  if (Password.length <9 ) {
    alert ("first name have to be more then 9 character");
    return false;
  }
}