
var ejemploetiquetas = ["🚽", "💴", "📗", "⏰", "💈"];
var ejemploetiquetas2 = ["🚽", "💴", "📗", "⏰", "💈"];
var ejemploetiquetas3 = ["🚽", "💴", "📗", "⏰", "💈"];

var todasLasTarjetas = ejemploetiquetas.concat(ejemploetiquetas2);

function creartarjeta(){


  var mesa = document.querySelector("#tar");

  todasLasTarjetas.forEach(function mensaje(Element) {
    var tarjeta = document.querySelector("#atr");

    tarjeta.innerHTML = "<p class='ico'>" + Element + "</p>"

    mesa.appendChild(tarjeta);
  });

}

creartarjeta();
