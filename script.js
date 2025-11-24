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
const clouds = document.querySelectorAll("#team-activities .cloud");

function checkVisibility() {
  const sectionTrigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < sectionTrigger) sec.classList.add("visible");
  });

  const cloudTrigger = window.innerHeight * 0.9;
  clouds.forEach(cloud => {
    const top = cloud.getBoundingClientRect().top;
    if (top < cloudTrigger) cloud.classList.add("visible");
  });
}

// Appel au scroll
window.addEventListener("scroll", checkVisibility);

// Appel au chargement pour les éléments déjà visibles
window.addEventListener("load", checkVisibility);
