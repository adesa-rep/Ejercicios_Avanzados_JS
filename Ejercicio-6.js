// Crea una función llamada **swap** que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
// Retorna el array resultante.

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
];

const swap = (array, index1, index2) => {
  let newArray = array.slice();

  if (
    index1 >= 0 &&
    index1 < newArray.length &&
    index2 >= 0 &&
    index2 < newArray.length
  ) {
    let valueSwap = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = valueSwap;
  } else {
    console.log(`debes indicar los index entre "0" y ${newArray.length - 1}`);
  }

  return newArray;
};

console.log(fantasticFour);
console.log(swap(fantasticFour, 1, 3));
