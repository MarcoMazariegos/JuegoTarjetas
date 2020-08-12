var ejemploetiquetas = ["🚽", "💴", "📗", "⏰", "💈"];
var ejemploetiquetas2 = ["🚽", "💴", "📗", "⏰", "💈"];
var ejemploetiquetas3 = ["🚽", "💴", "📗", "⏰", "💈"];
console.log(ejemploetiquetas);


console.log(ejemploetiquetas.adde)


var TodaslasTargets = ejemploetiquetas + ejemploetiquetas2 + ejemploetiquetas3;
console.log(TodaslasTargets);

/*SUMAR ARRAYS CONSERVANDO SU PROPIEDAD*/
var totaltargets = ejemploetiquetas.concat(ejemploetiquetas2);
console.log(totaltargets);

/*CONOCER LONGITUD DE UN ARRAYS*/
console.log(ejemploetiquetas.length);

/*AÑADIR VALORES A UN ARRAY*/
console.log(ejemploetiquetas.push("A"));
console.log(ejemploetiquetas);


/*ARRAYS ANIDADOS*/

var an= [
  ["🚽", "💴", "📗", "⏰", "💈"],
  ["🚽", "💴", "📗", "⏰", "💈"],
  ["🚽", "💴", "📗", "⏰", "💈"]
];
console.log(an);

/*COMO ACCEDER A UN ARRAY*/

console.log(an[0][2]);
