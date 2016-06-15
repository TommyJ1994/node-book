var Tom = {
  favFood: "bacon",
  favMovie: "Chappie"
};

var Person = Tom;
Person.favFood = "salad";
console.log(Tom.favFood); // Prints salad

console.log(19 == '19'); // Returns true - Compare values
console.log(19 === '19'); // Return false - Compare types
