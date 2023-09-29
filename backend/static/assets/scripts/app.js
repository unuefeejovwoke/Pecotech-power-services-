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
  let loginAttempts = 0;

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("emailInput").value;
    const passwordInput = document.getElementById("passwordInput").value;
    const csrf_token = $('input[name=csrfmiddlewaretoken]').val()


    // alert(csrf_token)
    data = $.ajax({
      type: "POST",
      url: "/login/",
      data: {
        email: emailInput,
        password: passwordInput,
        csrfmiddlewaretoken: csrf_token
      },

      // success to make sure the data is send to the backend
      success: function (data) {

        // we catch http response from the backend with is data "ok" and set required condition
        if (data == "ok") {
          successModal.classList.remove("hidden");
          setTimeout(
            function () {
              successModal.classList.add("hidden");
              location.href = "/dashboard"
            }, 2000
          );

        }
        else {
          loginAttempts++;
          if (loginAttempts >= 2) {
            // Display reset password link
            errorModal.innerHTML = `
             <div
          class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
          >&#8203;
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full py-5"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="flex flex-col items-center">
                <img class="w-16" src="{% static '/assets/img/failed.gif' %}" alt="failed" />
                <div class="text-center mt-4">
                  <h2 class="font-semibold text-2xl mb-1">Access Denied</h2>
                  <p>
                    Incorrect Login Credentials. you can request for a password
                    reset link by clicking on the reset button below.
                  </p>
                </div>
                <div class="flex justify-center mt-5">
                  <button>Reset</button>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button id="closeModalButton" class="bg-grey text-white">
                Close
              </button>
            </div>
          </div>
        </div>
    
            `;
          } else {
            // Display standard error message
            errorModal.innerHTML = `
            <div
          class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
          >&#8203;
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full py-5"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="flex flex-col items-center">
                <img class="w-16" src="{% static '/assets/img/failed.gif' %}" alt="failed" />
                <div class="text-center mt-4">
                  <h2 class="font-semibold text-2xl mb-1">Access Denied</h2>
                  <p>Incorrect Login Credentials</p>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button id="closeModalButton" class="bg-grey text-white">
                Close
              </button>
            </div>
          </div>
        </div>
            `;
          }

          const closeModalButton = document.getElementById("closeModalButton");
          closeModalButton.addEventListener("click", function () {
            errorModal.classList.add("hidden");
          });

          errorModal.classList.remove("hidden");
          setTimeout(function () {
            errorModal.classList.add("hidden");
          }, 6000);
        }

      },
      // fail if the data is not submited
      fail: function () {
        alert("bad")
      }
    })

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