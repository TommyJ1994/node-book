var movies = require('./objectFactory');
var user1Movies = movies();
user1Movies.favMovie = "Rush";

console.log("User 1's favourite movie is: " + user1Movies.favMovie);
