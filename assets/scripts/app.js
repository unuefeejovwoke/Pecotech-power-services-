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