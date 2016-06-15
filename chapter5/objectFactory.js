/* An object factory is an object which creates other objects using
the below function.
Each new object has its own copy
 */

module.exports = function() {
  return{
      favMovie: ""
  }
};

/* Output
User 1's favourite movie is: Rush
User 2's favourite movie is: Longest Yard
*/
