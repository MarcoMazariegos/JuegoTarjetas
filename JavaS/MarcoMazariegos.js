
var ejemploetiquetas = ["🚽", "💴", "📗", "⏰", "💈"];
var ejemploetiquetas2 = ["🚽", "💴", "📗", "⏰", "💈"];
var ejemploetiquetas3 = ["🚽", "💴", "📗", "⏰", "💈"];


function creartarjeta(){

  var mesa = document.querySelector("#mes");

  ejemploetiquetas.forEach(function mensaje(Element) {
    var tarjeta = document.querySelector("#at");

    tarjeta.innerHTML = "<p class='ico'>" + Element + "</p>"

    mesa.appendChild(tarjeta);
  });

}

creartarjeta();

function descubrirCarta(){
  this.classList.add("descubrir");
}

document.querySelectorAll(".a").forEach(function(elemento)  {
  elemento.addEventListener("click", descubrirCarta)
});
