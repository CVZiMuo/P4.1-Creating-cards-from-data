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
    // Create the card
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    // Make a list with the names of the comics
    let comics = "";
    for (let comic of char.comics.items) {
      comics += "<li>" + comic.name + "</li>";
    }

    // Fill the card: image, name, description and the comics button
    card.innerHTML =
      '<img src="' + char.thumbnail.path + "/portrait_xlarge." + char.thumbnail.extension + '" class="card-img-top">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' + char.name + "</h5>" +
      '<p class="card-text">' + char.description + "</p>" +
      '<button class="btn btn-dark" data-bs-toggle="collapse" data-bs-target="#comics-' + char.id + '">Comics</button>' +
      '<div class="collapse" id="comics-' + char.id + '"><ul>' + comics + "</ul></div>" +
      "</div>";

    // Put the card inside the container
    container.appendChild(card);
  }
}

