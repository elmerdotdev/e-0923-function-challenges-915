/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha
*/

let laugh = function(numberOfLaughs) {
  let message = "" // store the ha's
  let name = "John"
  for (let x = 1; x <= numberOfLaughs; x++) {
    message += "ha"
  }
  return { firstname: name, speak: message } // object
}

let reaction = laugh(10)
console.log(`${reaction.firstname} is ${reaction.speak}`)