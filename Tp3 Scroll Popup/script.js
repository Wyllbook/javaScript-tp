// Créer un événement au scroll

const mediat = document.querySelector(".improvise img");

window.addEventListener("scroll", () => {
  const navHeight = () => {
    if (window.scrollY > 50) {
      navbar.style.height = "45px";
    } else {
      navbar.style.height = "90px";
    }
  };
  const translation = () => {
    let scrollValue =
      (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.4) {
      mediat.style.opacity = 1;
      mediat.style.transform = "translateX(0)";
      console.log(scrollValue);
    } else {
      mediat.style.opacity = 0;
      mediat.style.transform = "translateX(-200px)";
    }
    if (scrollValue >= 0.85) {
      popup.style.transform = "none";
      popup.style.opacity = 1;
    }
    closeBtn.addEventListener("click", () => {
      popup.style.transform = "translateX(400px)";
      popup.style.visibility = "hidden";
      popup.style.opacity = 0;
    });
  };
  translation();
  navHeight();
});
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
