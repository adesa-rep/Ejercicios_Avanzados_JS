//Crea una función llamada **rollDice()** que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
// Que la función use el parametro para simular una tirada de dado y retornar el resultado.
// Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript **Math.random()**

function rollDice(caras) {
  if (caras <= 0 || !Number.isInteger(caras)) {
    console.log('el numero debe ser entero y positivo');
    return;
  }

  return Math.floor(Math.random() * caras + 1);
}

console.log(rollDice(6)); // 6 caras
console.log(rollDice(100)); // 100 caras
console.log(rollDice(3.5)); // no cumple la condicion
