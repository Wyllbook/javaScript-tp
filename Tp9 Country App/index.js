// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
const countriesContainer = document.querySelector(".countries-container");
const inputSearch = document.querySelector("input[type=text]");
const btnSort = document.querySelectorAll(".btnSort");

let countries = [];
let sortMethod = "maxToMin";
const fetchCountry = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      countries = data;
      console.log(countries);
    });
  countriesDisplay();
};
const countriesDisplay = () => {
  countriesContainer.innerHTML = countries
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      // localeCompare pour ranger par ordre alphabétique
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })
    .slice(0, inputRange.value)
    .map(
      (country) => `
    <div class="card">
    <img src=${country.flags.svg} alt="${country.name.common}">
    <h2>${country.translations.fra.common}</h2>
    <h4>${country.capital}</h4>
    <p> Nombres d'habitants: ${country.population.toLocaleString()}</p> 
      </div>
    `
    )
    .join("");
};

window.addEventListener("load", fetchCountry);
inputSearch.addEventListener("input", countriesDisplay);
inputRange.addEventListener("input", () => {
  countriesDisplay();
  rangeValue.textContent = inputRange.value;
});

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    countriesDisplay();
  });
});
