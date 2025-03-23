//? Parte 1:
//Crea una función llamada **findArrayIndex** que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

//en este caso, como solo vamos a borrar un elemento (en la 2da parte) podemos usar el indexOf... si quisieramos borrar mas de uno, lo ideal es usar el bucle que esta comentado mas abajo, ya que tras cada eliminacion, los indices van a cambiar y con ese bucle no habria problema porque, ademas, se esta recorriendo a la inversa.
function findArrayIndex(array, text) {
  let posicion = -1;
  if (array.includes(text)) {
    posicion = array.indexOf(text);
  }

  // for (let i = array.length - 1; i >= 0; i--) {
  //   if (array[i] === text) {
  //     posicion = i;
  //   }
  // }
  return posicion;
}

const printCharacterPosition = (array, text) => {
  let posicion = findArrayIndex(array, text);
  if (posicion >= 1) {
    console.log(`el personaje "${text}" esta en la posicion "${posicion}"`);
  } else {
    console.log(`"${text}" no esta en la lista`);
  }
  return;
};

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
];

printCharacterPosition(mainCharacters, 'Rey');
printCharacterPosition(mainCharacters, 'otro');

////////////////////////////////////
//? Parte 2
//Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
// Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
// Finalmente retorna el array.

function removeItem(array, text) {
  //creamos un nuevo array para duplicar el original y modificar solo ese
  let newArray = [];
  array.forEach((element) => {
    newArray.push(element);
  });
  //tambien podriamos haber creado una "copia" del array original usando slice
  // let newArray = mainCharacters.slice();

  let posicion = findArrayIndex(newArray, text); //devuelve la posicion de text dentro del array
  newArray.splice(posicion, 1);
  console.log(`se ha borrado a "${text}" de la lista`);
  printCharacterPosition(newArray, text);
  return newArray;
}

let result = removeItem(mainCharacters, 'Rey');

console.log('array original es: ', mainCharacters);
console.log('nuevo array tras borrar personaje es: ', result);
