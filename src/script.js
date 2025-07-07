document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.querySelector('input[type="text"]');
  const password = document.querySelector('input[type="password"]');
  if (!username.value.trim() || !password.value.trim()) {
    alert("Please fill in both fields.");
    return;
  }
  alert("Login submitted!");
});