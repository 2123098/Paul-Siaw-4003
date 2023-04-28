const jobs = [
  {
    title: "Product Manager",
    image: "../static/media/productmanager.png",
    details:
      "Lorem ipsum dolor, aliquam provident aut velit, accusantium non autem dolore id odit earum vitae labore! Maxime, impedit ad.",
    link: "#",
  },

  {
    title: "Software Engineer",
    image: "../static/media/soft.png",
    details:
      "Lorem ipsum dolor, aliquam provident aut velit, accusantium non autem dolore id odit earum vitae labore! Maxime, impedit ad.",
    link: "#",
  },

  {
    title: "Data Scientist",
    image: "../static/media/data.png",
    details:
      "Lorem ipsum dolor, aliquam provident aut velit, accusantium non autem dolore id odit earum vitae labore! Maxime, impedit ad.",
    link: "#",
  },

  {
    title: "Sales Representative",
    image: "../static/media/sales.png",
    details:
      "Lorem ipsum dolor, aliquam provident aut velit, accusantium non autem dolore id odit earum vitae labore! Maxime, impedit ad.",
    link: "#",
  },

  {
    title: "Marketing Manager",
    image: "../static/media/marketing.png",
    details:
      "Lorem ipsum dolor, aliquam provident aut velit, accusantium non autem dolore id odit earum vitae labore! Maxime, impedit ad.",
    link: "#",
  },

  {
    title: "Project Manager",
    image: "../static/media/project.png",
    details:
      "Lorem ipsum dolor, aliquam provident aut velit, accusantium non autem dolore id odit earum vitae labore! Maxime, impedit ad.",
    link: "#",
  },
];

const jobsHeading = document.querySelector(".joblists-container h2");
const jobsContainer = document.querySelector(".joblists-container .jobs");
const jobSearch = document.querySelector(".joblists-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "Apply Now";
      detailsBtn.classList.add("details-btn");


      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});

