// nav 
const menu = document.getElementById('menu');
const ham = document.getElementById('ham');

ham.addEventListener("click", ()=>{
    menu.classList.toggle('hidden');
});
// end of nav

// service form
const serviceFormBtns = document.getElementsByClassName('serviceFormBtn');
const serviceForm = document.getElementById('serviceForm');

// Loop through the collection of buttons and attach the event listener
for (const btn of serviceFormBtns) {
    btn.addEventListener("click", () => {
        serviceForm.classList.toggle("hidden");
    });
}

// end of service form 

// service form info
const info = document.getElementById('srf-info');
const infoBtn = document.getElementById('srf-info-btn');

infoBtn.addEventListener("mousedown", ()=>{
    info.classList.toggle('hidden');
});
console.log(infoBtn)

// end of service form info


//Testimonial Data
const testimonials = [
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: "profile-image-1.png",
      testimonial:
        "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
    },
    {
      name: "Katey Topaz",
      job: "Developer, TechCrew",
      image: "profile-image-2.png",
      testimonial:
        "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
    },
    {
      name: "Jae Robin",
      job: "UI Designer, Affinity Agency",
      image: "profile-image-3.png",
      testimonial:
        "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
      name: "Nicola Blakely",
      job: "CEO,Zeal Wheels",
      image: "profile-image-4.png",
      testimonial:
        "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
  ];
  //Current Slide
  let i = 0;
  //Total Slides
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
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;