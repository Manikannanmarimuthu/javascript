let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); 

let newFruits = fruits;

console.log(newFruits[0]);
newFruits[0] = "Banana";
console.log(newFruits[0]);
console.log(fruits[0]); 
newFruits.push("Grapes");
console.log(newFruits);
console.log(fruits);    