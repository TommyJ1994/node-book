function User() {
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer){
    targetPlayer.life += 1;
    console.log(this.name + " gave 1 life to " + targetPlayer.name);
  }
}

var Tom = new User();
var Bob = new User();

Tom.name = "Tom";
Bob.name = "Bob";

Tom.giveLife(Bob);
console.log("Tom: " + Tom.life);
console.log("Bob: " + Bob.life);

/* Output
Tom gave 1 life to Bob
Tom: 100
Bob: 101
*/

// Use prototypes to add additional functions onto this user class
// Now every instance of the user class has access to this function
User.prototype.uppercut = function uppercut(targetPlayer){
  targetPlayer.life -= 3;
  console.log(this.name + " just uppercut " + targetPlayer.name);
}

Tom.uppercut(Bob);
console.log("Tom: " + Tom.life);
console.log("Bob: " + Bob.life);

/* Output
Tom just uppercut Bob
Tom: 100
Bob: 98
*/

// You can also add properties to all objects
User.prototype.magic = 60;
console.log("Magic " + Tom.magic);
console.log("Magic " + Bob.magic);

/* Output
Magic 60
Magic 60
*/
