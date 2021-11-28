var templatesArray = JSON.parse(localStorage.getItem("templates"));
console.log(templatesArray);

window.sessionStorage;
sessionStorage.setItem("currentTemplate", "dummt");

createTemplateCards();

function createTemplateCards() {
  for (template of templatesArray) {
    let card = document.createElement("div");
    card.className = "card bg-dark shadow-lg m-3";
    card.style = "max-width: 20rem;";
    // id of card is the name of the template
    card.id = template.name;
    let cardHeader = document.createElement("div");
    cardHeader.className = "card-header text-black-50";
    cardHeader.style = "background-color: white;";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body text-white";
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    let cardText = document.createElement("p");
    cardText.className = "card-text text-white";
    let useButton = document.createElement("a");
    // Id of the button is the name of the templat the button is on

    useButton.id = template.name;
    useButton.href = "enterVariables.html";
    useButton.className = "btn btn-primary";
    useButton.innerHTML = "Use";
    // useButton.onclick = currentTemplateSetter;
    useButton.addEventListener("click", function () {
      localStorage.setItem("currentTemplate", useButton.id);
      console.log("setting current to id");
      console.log(localStorage.getItem("currentTemplate"));
      return true;
    });

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(useButton);

    cardHeader.innerHTML = template.name;
    cardTitle.innerHTML = "Certificate";
    cardText.innerHTML = template.format.slice(0, 100) + " ...";
    // console.log(document.getElementById("content-wrapper").childNodes);
    document.getElementById("templateCardPool").appendChild(card);

    console.log("appended card to pool");
  }
}

function currentTemplateSetter(id) {
  alert("working button click");
  localStorage.setItem("currentTemplate", id);
  console.log("setting current to id");
  console.log(localStorage.getItem("currentTemplate"));
  // return true;
}


