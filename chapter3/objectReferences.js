var Tom = {
  favFood: "bacon",
  favMovie: "Chappie"
};

var Person = Tom;
Person.favFood = "salad";
console.log(Tom.favFood);
