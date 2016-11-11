function validateForm(){
  var Username = document.forms["myForm"]['Username'].value;
  if (Username==null || Username== " ") {
    alert (" username is required");
    return false;
  }
  if (Username.length <9 ) {
    alert (" username have to be more then 9 character");
    return false;
  }
   var Password = document.forms["myForm"]['Password'].value;
  if (Password==null || Password== " ") {
    alert ( "Password is required");
    return false;
  }
  if (Password.length <9 ) {
    alert ("Password have to be more then 9 character");
    return false;
  }
}