const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    
    console.log('for:',element);
}

letters.forEach((letter, index, array) => {
    console.log(array);
    console.log('forEach:', index, letter);
    array.pop();
}) // forEach Ejecuta una funcion callback que recibe como argumento el elemento, el indice y el array
