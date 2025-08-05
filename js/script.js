document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-projects");
  const allProjects = document.querySelectorAll(".project-card");
  const hiddenProjects = [];

  
  allProjects.forEach((card, index) => {
    if (index > 3) {
      card.classList.add("hidden");
      hiddenProjects.push(card);
    }
  });

  let expanded = false;

  toggleBtn.addEventListener("click", () => {
    expanded = !expanded;
    hiddenProjects.forEach(card => {
      card.style.display = expanded ? "block" : "none";
    });
    toggleBtn.textContent = expanded ? "Ver menos projetos" : "Ver mais projetos";
  });

  if (allProjects.length <= 4) {
    toggleBtn.style.display = "none";
  }
});
