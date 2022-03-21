let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let tel = document.getElementById("phone");
let mail = document.getElementById("mail");
let date = document.getElementById("date");
let time = document.getElementById("time");
let nbGuest = document.getElementById("numberguests");

let resa = document.getElementById("tropDeGens");
let warning = document.getElementById("messageErreur");

let messageErreur = "";
let tropDeGens = "";

function validate() {
  // Initialisation d'une variable pour savoir s'il y a AU MOINS 1 erreur
  let valid = 0;

  // Le message d'erreur est mis à vide.
  messageErreur = "";
  tropDeGens = "";

  // Ré-initialisation des bordures si des erreurs ont déjà été détectées.
  nom.style.border = "none";
  prenom.style.border = "none";
  tel.style.border = "none";
  mail.style.border = "none";
  date.style.border = "none";
  time.style.border = "none";
  nbGuest.style.border = "none";

  // Vérification du nom de famille
  if (nom.value === "" || nom.value.length > 30) {
    messageErreur += "Le champ 'Nom' doit faire entre 0 et 30 caractères. <br>";
    nom.value = "";
    nom.style.border = "2px solid red";
    valid = 1;
  }

  // Vérification du prénom
  if (prenom.value === "" || prenom.value.length > 30) {
    messageErreur +=
      "Le champ 'Prénom' doit faire entre 0 et 30 caractères. <br>";
    prenom.value = "";
    prenom.style.border = "2px solid red";
    valid = 1;
  }

  // Vérification du numéro de téléphone avec les normes françaises.
  // Formats acceptés : 0X XX XX XX XX ou +33 X XX XX XX XX
  if (
    tel.value === "" ||
    !/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(tel.value)
  ) {
    messageErreur += "Le format du numéro de téléphone n'est pas bon. <br>";
    tel.value = "";
    tel.style.border = "2px solid red";
    valid = 1;
  }

  // Vérification de la construction de l'adresse e-mail.
  if (mail.value === "" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail.value)) {
    messageErreur += "Le format de l'adresse e-mail n'est pas bon. <br>";
    mail.value = "";
    mail.style.border = "2px solid red";
    valid = 1;
  }

  // Vérification de la date sélectionnée.
  if (date.value === "") {
    messageErreur += "La date choisie n'est pas valable. <br>";
    date.value = "";
    date.style.border = "2px solid red";
  }

  // Vérification de l'horaire sélectionné.
  if (time.value === "") {
    messageErreur += "L'horaire choisi n'est pas valable. <br>";
    time.value = "";
    time.style.border = "2px solid red";
  }

  // Vérification du nombre d'invité
  if (nbGuest.value > 6) {
    tropDeGens +=
      "Contactez-nous au 02 41 32 87 03 pour réserver au-delà de 6 couverts.";
    document.getElementById("tropDeGens").innerHTML = tropDeGens;
    resa.style.width = "fit-content";
    resa.style.margin = "0 auto";
    resa.style.backgroundColor = "#153b39";
    resa.style.color = "white";
    resa.style.border = "1px solid #153b39";
    resa.style.borderRadius = "25px";
    resa.style.padding = "2% 20px";
    resa.style.textAlign = "center";
    resa.style.marginTop = "20px";
    nbGuest.value = "";
    valid = 2;
  } else if (nbGuest.value === "") {
    messageErreur +=
      "Le nombre sélectionné de personnes n'est pas valable. <br>";
    nbGuest.value = "";
    nbGuest.style.border = "2px solid red";
    valid = 1;
  }

  // Si valid est toujours égal à 0 --> aucune erreur a été détectée,
  // le message s'envoie.
  if (valid === 0) {
    messageErreur = "<p>Votre demande a bien été envoyée.</p>";
    document.getElementById("messageErreur").innerHTML = messageErreur;
    warning.style.width = "fit-content";
    warning.style.margin = "0 auto";
    warning.style.alignItems = "center";
    warning.style.backgroundColor = "white";
    warning.style.border = "3px solid #5BB974";
    warning.style.borderRadius = "25px";
    warning.style.padding = "1% 20px";
    warning.style.textAlign = "center";
    warning.style.marginTop = "35px";
    return true;
  }

  // Si valid est égal à 1 --> au moins 1 erreur a été détectée, le message est bloqué,
  // les erreurs s'affichent.
  else if (valid === 1) {
    document.getElementById("messageErreur").innerHTML = messageErreur;
    warning.style.width = "fit-content";
    warning.style.margin = "0 auto";
    warning.style.alignItems = "center";
    warning.style.backgroundColor = "white";
    warning.style.border = "3px solid #ee675c";
    warning.style.borderRadius = "25px";
    warning.style.padding = "1% 20px";
    warning.style.textAlign = "center";
    warning.style.marginTop = "50px";
    return false;
  }
}

document
  .getElementById("boutonSubmit")
  .addEventListener("click", function (event) {
    // event.preventDefault();
    validate();
  });
