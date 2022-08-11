// Convert  today date to input format
const today = new Date().toISOString().split("T")[0]; //casse la chaine à T et transforme en tableau et donnel'élément 0 en chaine;

start_date.value = today;
start_date.min = today;

//Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); //prendre la date que l'on a déclaré(today) et  accéder au jour suivant avec getdDate() + 1

//convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// (change) =>à chaque changement sur un input on démarre l'évènement
start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value); //récupère la date qui est tapée  dans l'input
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1); //tomorrow
    end_date.value = day.toISOString().split("T")[0]; //convert to input format
  }
});
end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value); //récupère la date qui est tapée  dans l'input
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1); //=> yesterday
    start_date.value = day.toISOString().split("T")[0]; //convert to input format
  }
});
//fonction pour calculer la différence entre la date de début et la date de fin
const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value) //=> valeur en timestamp(millisecondes)
  ); // Math.abs permet de calculer la valeur absolue
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //=> convertir les millisecondes en  seconde , en minute , en heure puis en jour en jour
  total.textContent = diffDays * nightPrice.textContent; //=> variable pour calculer le prix par nuit en fonction de diffDays
};

//Créer un addEventListener pour que lorsqu'il y a un changement dans l'input la fonction bookingCalc se joue
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
bookingCalc();
