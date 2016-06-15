var movies = require('./objectFactory');
var user2Movies = movies();
user2Movies.favMovie = "Longest Yard";

console.log("User 2's favourite movie is: " + user2Movies.favMovie);
