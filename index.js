// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const cursor = document.querySelector("cursor");

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = eval(e.pageY + "px" - "981px");
});
// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
