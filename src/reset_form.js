document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const confirmNewPassword = document.getElementById("confirmNewPassword").value;

  if (newPassword !== confirmNewPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  alert("Password reset submitted!");
});