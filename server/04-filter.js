const words = ["spray", "elites", "limit", "apple", "exuberant", "Amazon"];

const wordsWithA = words.filter(word => word[0] === 'a' || word[0] === 'A');

console.log(wordsWithA);

const users = [
  { nombre: "Juan", edad: 15, profesion: "Estudiante" },
  { nombre: "María", edad: 16, profesion: "Estudiante" },
  { nombre: "Pedro", edad: 17, profesion: "Aprendiz de mecánico" },
  { nombre: "Ana", edad: 18, profesion: "Aprendiz de abogado" },
  { nombre: "Luis", edad: 19, profesion: "Programador en prácticas" },
  { nombre: "Laura", edad: 20, profesion: "Enfermera en formación" },
  { nombre: "Carlos", edad: 21, profesion: "Cocinero en un restaurante" },
  { nombre: "Marta", edad: 22, profesion: "Periodista en un periódico local" },
  { nombre: "Javier", edad: 23, profesion: "Arquitecto en un estudio de arquitectura" },
  { nombre: "Carlos", edad: 21, profesion: "Mesero en un restaurante" },
  { nombre: "Sofía", edad: 29, profesion: "Diseñadora gráfica freelance" }
];



const search = (word, data) => {

  return data.filter(item => item.nombre.includes(word));
}

console.log(search('Ana', users));
console.log(search('Carlos', users));
