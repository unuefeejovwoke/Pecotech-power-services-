// nav
const menu = document.getElementById("menu");
const ham = document.getElementById("ham");

ham.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
// end of nav

// service form
const serviceFormBtns = document.getElementsByClassName("serviceFormBtn");
const serviceForm = document.getElementById("serviceForm");

// Loop through the collection of buttons and attach the event listener
for (const btn of serviceFormBtns) {
  btn.addEventListener("click", () => {
    serviceForm.classList.toggle("hidden");
  });
}

// end of service form

// service form info
const info = document.getElementById("srf-info");
const infoBtn = document.getElementById("srf-info-btn");

infoBtn.addEventListener("mousedown", () => {
  info.classList.toggle("hidden");
});

// end of service form info

// ACCOUNT TABS
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((span, index) => {
  span.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
      btn.classList.add("bg-primary");
      btn.classList.remove("bg-grey");
    });
    span.classList.add("bg-grey");
    span.classList.remove("bg-primary");

    tabPanes.forEach((pane) => pane.classList.add("hidden"));
    tabPanes[index].classList.remove("hidden");
  });
});
// END ACCOUNT TABS

//  FAQ STUFF
const accordionButtons = document.querySelectorAll(".faq span");

accordionButtons.forEach((span) => {
  span.addEventListener("click", () => {
    const content = span.nextElementSibling;
    content.classList.toggle("hidden");

    const icon = span.querySelector(".svg");
    icon.classList.toggle("rotate-180");
  });
});

// END FAQ STUFF

// TEAM SLIDER
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#card-carousel", {
    autoplay: true,
    updateOnMove: true,
    type: "loop",
    perPage: 3,
    perMove: 1,
    // focus: "center",
    interval: 3000,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount();
});

// END TEAM SLIDER

// WORKS SLIDER
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#work-carousel", {
    autoplay: true,
    updateOnMove: true,
    type: "loop",
    perPage: 2,
    perMove: 1,
    focus: "center",
    interval: 3000,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount();
});
// END WORKS SLIDER


document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const errorModal = document.getElementById("errorModal");
  const successModal = document.getElementById("successModal");

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");

    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    const csrfToken = getCookie("csrftoken"); // Function to retrieve CSRF token

    const response = await fetch('/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Successful login
      successModal.classList.remove("hidden");
      setTimeout(function () {
        successModal.classList.add("hidden");
        window.location.href = "dashboard.html"; // Redirect after 2000ms
      }, 2000);
    } else {
      // Failed login
      const errorMessage = data.message || 'Login failed. Please try again.';
      errorModal.innerHTML = `
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full py-5">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="flex flex-col items-center">
                <img class="w-16" src="/assets/img/failed.gif" alt="error" />
                <div class="text-center mt-4">
                  <h2 class="font-semibold text-2xl mb-1">Access Denied</h2>
                  <p>${errorMessage}</p>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button id="closeModalButton" class="bg-grey text-white">Close</button>
            </div>
          </div>
        </div>
      `;

      errorModal.classList.remove("hidden");
      setTimeout(function () {
        errorModal.classList.add("hidden");
      }, 6000);

      const closeModalButton = document.getElementById("closeModalButton");
      closeModalButton.addEventListener("click", function () {
        errorModal.classList.add("hidden");
      });
    }
  });

  const modalOverlay = document.querySelector(".modal .transition-opacity");
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      errorModal.classList.add("hidden");
      successModal.classList.add("hidden");
    }
  });
});

// Function to retrieve the CSRF token from cookies
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}



// END LOGIN ERROR AND SUCCESS MODALS