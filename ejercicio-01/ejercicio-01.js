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
    if(validarCifra(creditCardNumber) == true){
      return (true);
    } else{
      return (false);
    }
}

function cantidadNumeros(creditCardNumber) {
  var num = creditCardNumber.toString();
  if(num.length == 16){
    return(true);
  }
}

function validarCifra(numeros){
  var cifra = numeros.toString();
  cifra = cifra.split("");
  var cifraString = (numeros.toString()).split("");

  var numero = cifraString.map(conversionNum);
  var pares = cifra.filter(pares);
}

function conversionNum(numero){
  return parseInt(numero);
}

function pares(numero,i){
  return i % 2 == 0;
}
function impares(numero,i){
  return i % 2 != 0;
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
