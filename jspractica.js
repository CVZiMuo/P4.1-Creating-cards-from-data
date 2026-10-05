/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("./data/heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderCards(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });

function renderCards(jsondata) {
  // Find the container in the HTML
  const container = document.getElementById("heroes");

  for (let char of jsondata.data.results) {
    // Create an empty div for this hero
    const card = document.createElement("div");
    card.className = "card";

    // Fill the card with the hero's name
    card.innerHTML = `<div class="card-body">
        <h5 class="card-title">${char.name}</h5>
      </div>`;

    // Put the card inside the container
    container.appendChild(card);
  }
}
