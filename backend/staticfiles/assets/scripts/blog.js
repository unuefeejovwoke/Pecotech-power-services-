document.addEventListener("DOMContentLoaded", () => {
  const blogPostsContainer = document.getElementById("blogPostsContainer");

  const blogPosts = [
    {
      category: "Category 1",
      title: "Experiencing the future today with home automation",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      date: "02 Aug, 2023",
      image: "/assets/img/home.webp",
    },
    {
      category: "Category 2",
      title:
        "8 Benefits of CCTV installation your home or business can't afford to miss out on",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      date: "24 Jul, 2023",
      image: "/assets/img/cctv.webp",
    },
    {
      category: "Category 3",
      title: "Electrical doings you need in your home",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      date: "16 Jul, 2023",
      image: "/assets/img/elec.webp",
    },
    {
      category: "Category 2",
      title: "Home automation tips",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      date: "04 Jul, 2023",
      image: "/assets/img/elec.webp",
    },
    {
      category: "Category 1",
      title: "10 ways to make your solar panels last",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      date: "15 Jun, 2023",
      image: "/assets/img/elec.webp",
    },
    {
      category: "Category 1",
      title: "Electrical appliances every guy man needs",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      date: "01 Jun, 2023",
      image: "/assets/img/elec.webp",
    },
    // Add more blog posts here
  ];

  blogPosts.forEach((post) => {
    const truncatedTitle =
      post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title;
    const truncatedContent =
      post.content.length > 50
        ? post.content.substring(0, 50) + "..."
        : post.content;

    const postElement = `
      <div class="p-4 md:w-1/2 lg:w-1/3" x-data="{ show: false }" x-show.transition.opacity="show">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img src="${post.image}" class="lg:h-48 md:h-36 w-full object-cover object-center" alt="blog" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${post.category}</h2>
            <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">${truncatedTitle}</h1>
            <p class="leading-relaxed mb-3">${truncatedContent}</p>
            <div class="flex items-center flex-wrap justify-between">
              <a href="/blog-detail.html" class="text-primary gap-2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <i class="fa-solid fa-arrow-right"></i>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">${post.date}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    blogPostsContainer.insertAdjacentHTML("beforeend", postElement);
  });
});
