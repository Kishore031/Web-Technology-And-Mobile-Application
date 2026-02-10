function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Demo credentials
  const correctUsername = "admin";
  const correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    message.style.color = "green";
    message.textContent = "Login successful!";
    // window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password";
  }
}
