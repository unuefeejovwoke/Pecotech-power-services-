document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");
  const errorModal = document.getElementById("errorModal");
  const successModal = document.getElementById("successModal");

  let loginAttempts = 0;

  const validCredentials = {
    username: "tori",
    password: "tori",
  };

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (
      enteredUsername === validCredentials.username &&
      enteredPassword === validCredentials.password
    ) {
      // Successful login
      successModal.classList.remove("hidden");
      setTimeout(function () {
        successModal.classList.add("hidden");
        window.location.href = "dashboard.html"; // Redirect after 900ms
      }, 2000);
    } else {
      // Failed login
      loginAttempts++;

      if (loginAttempts >= 2) {
        // Display reset password and create account links
        errorModal.innerHTML = `
        
        `;
      } else {
        // Display standard error message
        errorModal.innerHTML = `
       
        `;
      }
      const closeModalButton = document.getElementById("closeModalButton");
      closeModalButton.addEventListener("click", function () {
        errorModal.classList.add("hidden");
      });

      errorModal.classList.remove("hidden");
      setTimeout(function () {
        errorModal.classList.add("hidden");
      }, 10000);
    }
  });

  const modalOverlay = document.querySelector(".modal .transition-opacity");
  const modal = document.querySelector("modal");
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      errorModal.classList.add("hidden");
      successModal.classList.add("hidden");
    }
  });
});
