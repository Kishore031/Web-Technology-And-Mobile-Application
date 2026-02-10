function validateForm() {

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var address = document.getElementById("address").value;

  // First Name validation
  var namePattern = /^[A-Za-z]+$/;
  if (!fname.match(namePattern) || fname.length < 6) {
    alert("First Name must contain only alphabets and be at least 6 characters long");
    return false;
  }

  // Password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  // Email validation
  var emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid E-mail format");
    return false;
  }

  // Mobile number validation
  var mobilePattern = /^[0-9]{10}$/;
  if (!mobile.match(mobilePattern)) {
    alert("Mobile number must contain exactly 10 digits");
    return false;
  }

  // Last Name validation
  if (lname === "") {
    alert("Last Name cannot be empty");
    return false;
  }

  // Address validation
  if (address === "") {
    alert("Address cannot be empty");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
