const user = {
    name: 'Jeffer',
    age: 25,
    courses: [
        'Curso de Cocina',
        ['Infiltrado']
    ]
}

console.log(user);

const user2 = user;
user2.name = 'Pablo';
console.log(user2);


console.log(user, user2);
user.name = 'Sofia';
console.log(user, user2);

const user3 = { ...user };
console.log(user3, user);

user3.name = 'Jeffer';
console.log(user3, user);

console.log(user === user2);
console.log(user === user3 && user2 === user3);

console.log(user3.courses === user.courses);
console.log(user.courses);
console.log(user3.courses);

console.log(user3.courses[1] === user.courses[1]);
user3.courses[1] = ['Curso de Natación'];
console.log(user3.courses[1] === user.courses[1]);
console.log('User3: ', user3.courses, 'User: ', user.courses);



