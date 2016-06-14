/* n addition to the standard while , do...while , and for loops, JavaScript also supports the
new language extensions for loop called the for...in loop (V8 JS). This loop is used to get
the names of all the keys on an object: */

var user = {
  first_name: "marc",
  last_name: "wandschneider",
  age: Infinity,
  occupation: "writer"
};

for (key in user) {
  console.log(key);
}

/* Output
first_name
last_name
age
occupation
*/
