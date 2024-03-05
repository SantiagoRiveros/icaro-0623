// numero lo divido por 2, como puedo verificar que ese resto es 0?

function esPar(milanesa) {
  return milanesa % 2 === 0;
}

let numero = 22;

console.log(esPar(numero));

const esPar2 = (num) => num % 2 === 0;

console.log(esPar2(9));

const esPar3 = (num) => {
  return num % 2 === 0;
};

function contarVocales(str) {
  let counter = 0;
  // el poinnter nos va a servir como referencia para recorrer "algo" dentro del bucle
  // La condition va a ser lo que debera cumplirse al inicio de cada ciclo, para que siga ejecutandose el ciclo
  // action es lo que se va a efectuar una vez se complete un ciclo
  //   pointer    condition      action
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === "a" ||
      str[i].toLowerCase() === "e" ||
      str[i].toLowerCase() === "i" ||
      str[i].toLowerCase() === "o" ||
      str[i].toLowerCase() === "u"
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(contarVocales("hola como estas?"));

let nombreFuncion = (str1, str2) => str1 + str2;

console.log(nombreFuncion("mila", "nesa"));
