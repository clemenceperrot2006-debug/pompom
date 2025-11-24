// Défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Apparition douce des sections
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
});

// Apparition des nuages un par un
const clouds = document.querySelectorAll("#team-activities .cloud");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.9;
  clouds.forEach(cloud => {
    const top = cloud.getBoundingClientRect().top;
    if (top < trigger) cloud.classList.add("visible");
  });
});
