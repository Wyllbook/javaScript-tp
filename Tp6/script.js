const form = document.querySelector("form");

// Storage part
function storeList() {
  //fonction pour stocker
  window.localStorage.todoList = list.innerHTML; //"todoList"nom de l'espace de stockage = list.innerHTML
}

function getTodos() {
  //fonction pour afficher ce qu'il y a dans la mémoire
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos);

// Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

// Remove element
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    //=> contains est une méthode pour savoir si la classe existe
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
