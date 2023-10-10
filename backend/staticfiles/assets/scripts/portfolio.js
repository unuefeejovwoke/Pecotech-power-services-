document.addEventListener("DOMContentLoaded", () => {
  const images = [
    { category: "cctv", src: "./assets/img/cctv1.webp" },
    { category: "cctv", src: "./assets/img/cctv.webp" },
    { category: "cctv", src: "./assets/img/cctvinst.webp" },

    { category: "solar", src: "./assets/img/sola.webp" },
    { category: "solar", src: "./assets/img/solar1.webp" },
    { category: "solar", src: "./assets/img/solarinst.webp" },

    { category: "wiring", src: "./assets/img/fa.webp" },
    { category: "wiring", src: "./assets/img/idoor.webp" },
    { category: "wiring", src: "./assets/img/wiring1.webp" },
    { category: "wiring", src: "./assets/img/wiring2.webp" },
    { category: "wiring", src: "./assets/img/wiring3.webp" },

    { category: "home-automation", src: "./assets/img/auto1.webp" },
    { category: "home-automation", src: "./assets/img/auto2.webp" },
    { category: "home-automation", src: "./assets/img/auto3.webp" },
  ];

  // Function to display images in a given category
  function displayImages(category, containerId) {
    const container = document.getElementById(containerId);

    // Check if the container element exists before manipulating it
    if (container) {
      container.innerHTML = "";

      const categoryImages = images.filter((img) => img.category === category);

      categoryImages.forEach((img) => {
        const imageElement = document.createElement("img");
        imageElement.src = img.src;
        imageElement.alt = img.category;
        container.appendChild(imageElement);
      });
    } else {
      console.error(`Container with ID '${containerId}' not found.`);
    }
  }

  // Function to display all images
  function displayAllImages() {
    const container = document.getElementById("allImages");

    // Check if the container element exists before manipulating it
    if (container) {
      container.innerHTML = "";

      images.forEach((img) => {
        const imageElement = document.createElement("img");
        imageElement.src = img.src;
        imageElement.alt = img.category;
        imageElement.classList.add("rounded-lg");

        container.appendChild(imageElement);
      });
    } else {
      console.error("Container with ID 'allImages' not found.");
    }
  }

  // Call the functions to display images
  displayImages("cctv", "cctv");
  displayImages("solar", "solar");
  displayImages("wiring", "wiring");
  displayImages("home-automation", "homeAutomation");
  displayAllImages();
});

console.log(allImages);
