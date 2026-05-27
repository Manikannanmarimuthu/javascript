let person = {
    name:"Manikannan",
    age: 22,
    city: "Chennai"
}

console.log(person.name);
console.log(person.age);
console.log(person.city);   

let anotherPerson =  person;
anotherPerson.name = "Vignesh";
console.log(anotherPerson.name);
console.log(person.name);