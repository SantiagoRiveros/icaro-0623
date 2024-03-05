/* function obtenerSensacion(temperatura) {
  if (temperatura < 0) {
    return "¡Esta Helando!";
  } else if (temperatura >= 0 && temperatura < 15) {
    return "¡Hace Frio!";
  } else if (temperatura <= 25) {
    return "Esta Lindo";
  } else if (temperatura < 30) {
    return "Hace Calor";
  } else if (temperatura < -273.15) {
    return "Es Fisicamente imposible ese valor";
  } else {
    return "¡Hace Mucho Calor!";
  }
} */

function obtenerSensacion(temperatura) {
  if (typeof temperatura !== "number") {
    return "Ingrese un numero Valido";
  } else if (temperatura < -273.15) {
    return "Es Fisicamente Imposible Ese Valor";
  } else if (temperatura < 0) {
    return "¡Esta Helando!";
  } else if (temperatura >= 0 && temperatura < 15) {
    return "¡Hace Frio!";
  } else if (temperatura >= 15 && temperatura < 25) {
    return "Esta lindo";
  } else if (temperatura >= 25 && temperatura < 30) {
    return "Hace Calor";
  } else {
    return "¡Hace Mucho Calor!";
  }
}

console.log(obtenerSensacion(3));

const obtenerDiasMes = (mes) => {
  let meses = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31,
    junio: 30,
    julio: 31,
    agosto: 30,
    septiembre: 31,
    octubre: 30,
    noviembre: 31,
    diciembre: 31,
  };
  return meses[mes.toLowerCase()] || "Mes no valido";
};
console.log(obtenerDiasMes("EnERO"));
