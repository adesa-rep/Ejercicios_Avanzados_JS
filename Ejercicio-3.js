// Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
];

// hare un diccionario con los sonidos y sus repeticiones
let soundRepetitions = {}; //diccionario
for (let user of users) {
  for (let sound in user.favoritesSounds) {
    if (soundRepetitions[sound]) {
      soundRepetitions[sound] += 1;
    } else {
      soundRepetitions[sound] = 1;
    }
  }
}

for (let sound in soundRepetitions) {
  console.log(
    `el sonido "${sound}" se repite "${soundRepetitions[sound]}" veces`
  );
}

console.log(soundRepetitions);
