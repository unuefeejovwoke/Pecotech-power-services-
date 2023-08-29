//Testimonial Data
const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image: "/assets/img/testim.png",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image: "/assets/img/testim.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Tori Dev",
    job: "CEO, TechCrew",
    image: "/assets/img/testim.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
];
 // Current Slide
let i = 0;
// Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.classList.add("slide"); // Add slide class
  setTimeout(() => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src="${testimonials[i].image}"/>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
    testimonialContainer.classList.remove("slide"); // Remove slide class after updating content
  }, 250); // Set a timeout to match the transition duration
};

// Auto Slider
function autoSlider() {
  testimonialContainer.classList.add("slide");
  setTimeout(() => {
    i = (i + 1) % j;
    displayTestimonial();
    testimonialContainer.classList.remove("slide");
  }, 250);
}

window.onload = () => {
  displayTestimonial();
  setInterval(autoSlider, 8000); // Move to the next slide every 5 seconds
};