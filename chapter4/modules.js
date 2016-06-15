var movies = require('./modulesFile');

// calls printAvatar method in another module.
movies.printAvatar();

// print out attribute
console.log(movies.favMovie);

/* Output
Avatar: PG-13
The Matrix
*/
