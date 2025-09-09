console.log("Hello part6");

const name = "ByMing";
const age = 20;

console.log(`My name is ${name} and I am ${age} years old. 'acb' "abc" `);

console.log(`My name is ${name} and I am ${age}
years old. 'acb' "abc" `); //template string

//date
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; //0-11
const date = today.getDate(); //1-31
const day = today.getDay(); //0-6 0: Sunday, 1: Monday, ..., 6: Saturday


function calculateAge(birthYear) {
    return year - birthYear;
}

console.log(Age = calculateAge(2000));

const Byming = {
    name: name,
    age: calculateAge(2000),
    isMale: true,
    birthYear: 2000
}

console.log(Byming);