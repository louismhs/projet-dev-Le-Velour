$(".bxslider").bxSlider({
  mode: "horizontal",
  auto: true,
  pause: 4000,
  autoHover: true,
  stopAutoOnClick: true
  // slideWidth: 600
});

function myFunction() {
  var x = document.getElementById("mesLiens");
  var y = document.getElementById("bars");
  var z = document.getElementById("xmark");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
  }
}

// let entreeNom = document.getElementById("nom");
// let entreePrenom = document.getElementById("prenom");
// let entreeMail = document.getElementById("mail");
// let entreePhone = document.getElementById("phone");
// let entreeDate = document.getElementById("date");
// let entreeTime = document.getElementById("time");
// let entreePeople = document.getElementById("numberguests");

// let messageErreur = "";

// function validate() {
//   if (entreeNom.value === "") {
//     //alert("Le champ nom est vide");
//     messageErreur += "Le champ nom est vide. \n";
//     entreeNom.value = "";
//     entreeNom.style.border = "2px red solid";
//   }
//   if (entreePrenom.value === "") {
//     //alert("Le champ nom est vide");
//     messageErreur += "Le champ nom est vide. \n";
//     entreeNom.value = "";
//     entreeNom.style.border = "2px red solid";
//   }
//   if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(entreeMail.value)) {
//     messageErreur += "Mauvais format d'adresse mail. \n";
//     entreeMail.value = "";
//     entreeMail.style.border = "2px red solid";
//   }
//   if (entreeDate.value === "") {
//     //alert("Le champ nom est vide");
//     messageErreur += "Le champ nom est vide. \n";
//     entreeNom.value = "";
//     entreeNom.style.border = "2px red solid";
//   }
//   if (entreeTime.value === "") {
//     //alert("Le champ nom est vide");
//     messageErreur += "Le champ nom est vide. \n";
//     entreeNom.value = "";
//     entreeNom.style.border = "2px red solid";
//   }
//   if (entreePeople.value === "") {
//     //alert("Le champ nom est vide");
//     messageErreur += "Le champ nom est vide. \n";
//     entreeNom.value = "";
//     entreeNom.style.border = "2px red solid";
//   }

//   if (messageErreur !== "") {
//     //alert(messageErreur);
//     document.getElementById("messageErreur").innerHTML = messageErreur;
//     return false;
//   }
//   return true;
// }
