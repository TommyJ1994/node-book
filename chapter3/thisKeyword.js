// 'This' references whatever thing is calling it

var Tom = {
  printFirstName: function()
  {
    console.log("My name is Tom");
    console.log(this == Tom);
  }
}

Tom.printFirstName();

// THe default calling context is global (ie. if no owner)
function doSomethingWorthless(){
  console.log("I am worthless");
  console.log(this === global);
}

doSomethingWorthless();

/* Outputs
My name is Tom
true
I am worthless
true
*/
