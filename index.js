// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const sideBar = document.querySelector("#side-bar");
const content = document.querySelector(".content");
btn.addEventListener("click", () => {
  sideBar.classList.toggle("translate");
});
// Ranger la sidebar si on click sur le contenu principal
content.addEventListener("click", () => {
  sideBar.classList.remove("translate");
});
// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
