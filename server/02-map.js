const letters = ['a', 'b', 'c'];

const newLetters = [];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];

    newLetters.push(`New: ${element}++`);
}

const newLetters2 = newLetters.map(element => `${element}++`);
const newLetters3 = newLetters.map((e, i, a) => `${i}: ${e}++ hay ${a.length}`);

console.log(letters);
console.log(newLetters);
console.log(newLetters2);
console.log(newLetters3);
console.log(letters === newLetters && newLetters === newLetters2);