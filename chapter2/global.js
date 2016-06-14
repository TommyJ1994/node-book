/* When you write JavaScript in web browsers, you have the window object, which acts as a
“global” variable. Any variables or members you attach to it are available anywhere in your
application.

Node.js has something similar, called the global object. Anything attached to it is available
anywhere in your node application:  */

function printit(var_name) {
console.log(global[var_name]);
}
global.fish = "swordfish";
global.pet = "cat";
printit("fish"); // prints swordfish
printit("pet"); // prints cat
printit("fruit"); // prints undefined
