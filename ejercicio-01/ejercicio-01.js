function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber == undefined){
      return("Ingresa un numero");
    }

    if(typeof creditCardNumber != "number"){
      return("Error de dato");
    }

    if (cantidadNumeros(creditCardNumber) != true){
      return("Faltan numeros");
    }
}

function cantidadNumeros(creditCardNumber) {
  var num = creditCardNumber.toString();
  if(num.length == 16){
    return(true);
  }
}
// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
